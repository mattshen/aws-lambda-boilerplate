#!/usr/bin/env node
'use strict';
const config = require('../function.config.js');
const exec = require('child_process').exec;

function puts(error, stdout, stderr) { console.log(stdout, stderr) }
exec(`
aws lambda invoke \
  --invocation-type RequestResponse \
  --function-name ${config.functionName} \
  --log-type Tail \
  ${config.outputFile} | node ./scripts/jq.js | base64 -D
`, puts);

exec(`cat ${config.outputFile}`, puts);