#!/usr/bin/env node
'use strict';
const config = require('../function.config.js');
const exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout, stderr) }

exec(`zip ${config.zipFileName} index.js`, puts);

exec(`
aws lambda update-function-code \
--function-name ${config.functionName} \
--zip-file fileb://${config.zipFileName}
`, puts);
