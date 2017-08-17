#!/usr/bin/env bash

echo
echo
aws lambda invoke \
  --invocation-type RequestResponse \
  --function-name $FUNCTION_NAME \
  --log-type Tail \
  outputfile.txt | node ./scripts/jq.js | base64 -D

echo
echo
cat outputfile.txt
echo