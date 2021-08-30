const conf = new (require('conf'))()
const chalk = require('chalk')
function list() {
    const todoList = conf.get('todo-list')
    if (todoList && todoList.length) {
        console.log(
            chalk.blue.bold('Tasks in '),
            chalk.green.bold('GREEN '),
            chalk.blue.bold('are'),
            chalk.green.bold(' DONE.\n'),
            chalk.blue.bold('Tasks in '),
            chalk.yellow.bold('YELLOW '),
            chalk.blue.bold('are still '),
            chalk.yellow.bold('NOT DONE.\n')
        )
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`${index + 1}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk.yellowBright(`${index + 1}. ${task.text}`)
                )
            }
        })
    } else {
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
}
module.exports = list