{% extends "transformers/default.jinja" %}
{% block imports %}
from sentence_transformers import SentenceTransformer
from typing import List, Tuple, Union

{{ super() -}}
{% endblock %}

{% block content %}
@transformer
def sentence_bert(document_data: Tuple[str, str, str, List[str]], *args, **kwargs) -> Tuple[str, str, str, List[str], List[Union[float, int]]]:
    """
    Modifies BERT to derive semantically meaningful sentence embeddings.

    Args:
        document_data (Tuple[str, str, str, List[str]]): Tuple containing document_id, document_content, chunk_text, and tokens.

    Returns:
        Tuple[str, str, str, List[str], List[Union[float, int]]]: Tuple containing document_id, document_content, chunk_text, tokens, and embeddings.
    """
    document_id, document_content, chunk_text, tokens = document_data
    model_name = kwargs['model_name']
    max_length = kwargs.get('max_length', 128)

    model = SentenceTransformer(model_name)
    embeddings = model.encode(' '.join(tokens))

    return document_id, document_content, chunk_text, tokens, embeddings
{% endblock %}
