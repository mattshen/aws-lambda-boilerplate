#!/usr/bin/env node
'use strict';
const config = require('../function.config.js');
const exec = require('child_process').exec;

function puts(error, stdout, stderr) { console.log(stdout, stderr) }
exec(`aws lambda publish-version --function-name ${config.functionName}`, puts);