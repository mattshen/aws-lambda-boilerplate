#!/usr/bin/env node
'use strict';
const config = require('../function.config.js');
const exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout, stderr) }

exec(`aws logs describe-log-streams --log-group-name /aws/lambda/${config.functionName} --order-by LastEventTime`, puts);