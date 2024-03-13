import os
from dotenv import load_dotenv

load_dotenv()

FRONTEND_URL = os.environ["FRONTEND_URL"]

AWS_ACCESS_KEY_ID = os.environ["AWS_ACCESS_KEY_ID"]
AWS_SECRET_ACCESS_KEY = os.environ["AWS_SECRET_ACCESS_KEY"]
REGION_NAME = os.environ["REGION_NAME"]

OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]

# GMAIL_API_CLIENT_ID = os.environ["GMAIL_API_CLIENT_ID"]
# GMAIL_API_CLIENT_SECRET = os.environ["GMAIL_API_CLIENT_SECRET"]
