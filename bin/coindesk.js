#!/usr/bin/env node

const program = require('commander');

program
    .version('1.0.0')
    .command('key', 'Manage Api Key -- https://nomics.com')
    .command('check', 'Check Coin Price Info')
    .parse(process.argv)