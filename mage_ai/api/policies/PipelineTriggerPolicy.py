from mage_ai.api.oauth_scope import OauthScope
from mage_ai.api.operations import constants
from mage_ai.api.policies.BasePolicy import BasePolicy
from mage_ai.api.presenters.PipelineTriggerPresenter import PipelineTriggerPresenter


class PipelineTriggerPolicy(BasePolicy):
    def initialize_project_uuid(self):
        parent_model = self.options.get('parent_model')
        if parent_model:
            self.project_uuid = parent_model.project_uuid
        else:
            super().initialize_project_uuid()


PipelineTriggerPolicy.allow_actions([
    constants.LIST,
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], condition=lambda policy: policy.has_at_least_viewer_role())

PipelineTriggerPolicy.allow_actions([
    constants.CREATE,
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], condition=lambda policy: policy.has_at_least_editor_role())

PipelineTriggerPolicy.allow_read(PipelineTriggerPresenter.default_attributes + [], scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.LIST,
], condition=lambda policy: policy.has_at_least_viewer_role())

PipelineTriggerPolicy.allow_read(PipelineTriggerPresenter.default_attributes + [], scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.CREATE,
], condition=lambda policy: policy.has_at_least_editor_role())

PipelineTriggerPolicy.allow_write(PipelineTriggerPresenter.default_attributes + [
  'pipeline_schedule_id',
], scopes=[
    OauthScope.CLIENT_PRIVATE,
], on_action=[
    constants.CREATE,
], condition=lambda policy: policy.has_at_least_editor_role())
