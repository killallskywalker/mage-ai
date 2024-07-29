from mage_ai.shared.models import BaseEnum


class ExecutionFrameworkUUID(BaseEnum):
    RAG = 'rag'
    STANDARD = 'standard'


class GroupUUID(BaseEnum):
    ANSWER_ENRICHMENT = 'answer_enrichment'
    CHUNKING = 'chunking'
    CLEANING = 'cleaning'
    CONTEXTUALIZATION = 'contextualization'
    CONTEXTUAL_DICTIONARY = 'contextual_dictionary'
    DATA_PREPARATION = 'data_preparation'
    DOCUMENT_HIERARCHY = 'document_hierarchy'
    EMBED = 'embed'
    ENRICH = 'enrich'
    EXPORT = 'export'
    INDEX = 'index'
    INFERENCE = 'inference'
    INGEST = 'ingest'
    INTENT_DETECTION = 'intent_detection'
    ITERATIVE_RETRIEVAL = 'iterative_retrieval'
    KNOWLEDGE_GRAPH = 'knowledge_graph'
    LOAD = 'load'
    MAP = 'map'
    MEMORY = 'memory'
    MULTI_HOP_REASONING = 'multi_hop_reasoning'
    QUERY_AUGMENTATION = 'query_augmentation'
    QUERY_DECOMPOSITION = 'query_decomposition'
    QUERY_PROCESSING = 'query_processing'
    RANKING = 'ranking'
    RESPONSE_FORMATTING = 'response_formatting'
    RESPONSE_GENERATION = 'response_generation'
    RESPONSE_SYNTHESIS = 'response_synthesis'
    RETRIEVAL = 'retrieval'
    SEARCH_INDEX = 'search_index'
    TOKENIZATION = 'tokenization'
    TRANSFORM = 'transform'
    VECTOR_DATABASE = 'vector_database'
    NONE = 'none'
