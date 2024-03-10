import boto3
from flask import Blueprint, jsonify
import const as const
from .config import cache

bp = Blueprint("sign", __name__)

s3_client = boto3.client(
    's3',
    aws_access_key_id=const.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=const.AWS_SECRET_ACCESS_KEY,
    region_name=const.REGION_NAME
)

@bp.route('/get-image-url/<bucket_name>/<image_key>')
def get_image_url(bucket_name: str, image_key: str):
    image_url = cache.get(f'image_url:{image_key}')

    if image_url is None:
        image_url = s3_client.generate_presigned_url(
            'get_object',
            Params={'Bucket': bucket_name, 'Key': image_key},
            ExpiresIn=3600
        )
        cache.set(f'image_url:{image_key}', image_url, timeout=3600)

    return jsonify({'url': image_url})
