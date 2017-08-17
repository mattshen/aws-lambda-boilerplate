#!/usr/bin/env bash

stream_name=$1
aws logs get-log-events --log-group-name /aws/lambda/$FUNCTION_NAME --log-stream-name $stream_name