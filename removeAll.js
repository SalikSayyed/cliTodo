const conf = new (require('conf'))
const chalk = require('chalk')
const list = require('./list')

function removeAll() {
    conf.set('todo-list', [])
    console.log(
        chalk.blue.bold('All Todos Removed')
    )
    list()
}

module.exports = removeAll
