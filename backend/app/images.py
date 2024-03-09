import boto3
from flask import Blueprint, jsonify
import const as const

bp = Blueprint("sign", __name__)

s3_client = boto3.client(
    's3',
    aws_access_key_id=const.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=const.AWS_SECRET_ACCESS_KEY,
    region_name=const.REGION_NAME
)

@bp.route('/get-image-url/<bucket_name>/<image_key>')
def get_image_url(bucket_name: str, image_key: str):
    url = s3_client.generate_presigned_url(
      'get_object',
      Params={'Bucket': bucket_name, 'Key': image_key},
      ExpiresIn=14400
    )
    return jsonify({'url': url})
