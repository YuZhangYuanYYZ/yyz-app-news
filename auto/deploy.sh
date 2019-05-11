#!/bin/bash -eu

export AWS_DEFAULT_REGION=ap-southeast-2
export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
export AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

aws s3 sync ./build s3://new-yyz-news