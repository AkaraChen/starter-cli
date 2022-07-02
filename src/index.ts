#!/usr/bin/env node

import { Command } from 'commander'
import shell from 'shelljs'

const program = new Command()

program
    .name('starter-cli')
    .description('CLI to some utilities')
    .version('1.0.0')

program.command("greet")
    .action(() => {
        shell.echo("Hello, World!")
    })

program.parse()
