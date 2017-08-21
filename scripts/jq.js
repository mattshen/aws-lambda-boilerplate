#!/usr/bin/env node

// Reads JSON from stdin and writes equivalent
// nicely-formatted JSON to stdout.
'use strict'

var stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});

stdin.on('end', function () {
    var inputJSON = inputChunks.join();
    var parsedData = JSON.parse(inputJSON);

    stdout.write('\n');
    stdout.write(parsedData.LogResult);
    stdout.write('\n');
});