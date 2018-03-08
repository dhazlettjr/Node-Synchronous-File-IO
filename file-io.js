#!/usr/bin/env node

const {readFileSync} = require ('fs');

const input = process.argv[2];
const output = readFileSync(input);
process.stdout.write(output);