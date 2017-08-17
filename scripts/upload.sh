#!/usr/bin/env bash

zip $FUNCTION_FILE index.js

aws lambda update-function-code \
--function-name $FUNCTION_NAME \
--zip-file fileb://$FUNCTION_FILE
