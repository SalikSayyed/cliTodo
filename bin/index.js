#!/usr/bin/env node
const { program } = require('commander')
const list = require('../list')
const add = require('../addtodo')
const markDone = require('../markDone')
const markUndone = require('../markundone')
const remove = require('../removetodo')
const removeAll = require('../removeAll')
const toggleNotifications = require('../toggleNotification')

program
    .command('l')
    .description('List all the Todo tasks')
    .action(list)
program
    .command('a <tasks...>')
    .description('Add new TODO tasks')
    .action(add)

program
    .command('md <tasks...>')
    .description('Mark commands done')
    .action(markDone)
program
    .command('mu <tasks...>')
    .description('Mark commands not done')
    .action(markUndone)
program
    .command('rm <tasks...>')
    .description('Remove todos')
    .action(remove)
program
    .command('ra')
    .description('Remove all todos')
    .action(removeAll)
program
    .command('n <set>')
    .description('1 => notification on\n0 => notifications off')
    .action(toggleNotifications)
program.parse()