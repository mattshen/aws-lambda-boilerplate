#!/usr/bin/env node
'use strict';
var exec = require('child_process').exec;

function puts(error, stdout /*, stderr*/) { console.log(stdout) }
exec('aws lambda publish-version --function-name inbox_messages', puts);