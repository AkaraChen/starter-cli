#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
    .name('starter-cli')
    .description('CLI to some utilities')
    .version('1.0.0');

program.command('greet').action(() => {
    console.log('Hello, World!');
});

program.parse();
