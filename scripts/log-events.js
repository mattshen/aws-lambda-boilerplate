#!/usr/bin/env node
'use strict';
const config = require('../function.config.js');
const exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout, stderr) }

const args = process.argv.slice(2);
const stream_name= args[0];

if (stream_name) {
  exec(`
  aws logs get-log-events --log-group-name /aws/lambda/${config.functionName} --log-stream-name ${stream_name}
  `, puts);
} else {
  console.error('Missing Stream Name');
}