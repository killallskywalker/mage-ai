from typing import Any, Union

from mage_ai.api.presenters.BasePresenter import BasePresenter


class KernelPresenter(BasePresenter):
    default_attributes = [
        'alive',
        'closed',
        'id',
        'name',
        'process_details',
        'processes',
        'ready',
        'running',
        'state',
        'terminated',
        'usage',
    ]

    async def prepare_present(self, **kwargs) -> Union[Any, None]:
        kernel = self.resource.model
        if not kernel.is_ready():
            await kernel.prepare_usage()

        return kernel.to_dict()
