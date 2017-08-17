#!/usr/bin/env bash

aws logs describe-log-streams --log-group-name /aws/lambda/$FUNCTION_NAME --order-by LastEventTime