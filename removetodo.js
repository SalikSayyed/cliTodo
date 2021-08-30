const conf = new (require('conf'))
const chalk = require('chalk');
const list = require('./list');

function remove(tasks) {
    console.log(tasks);
    let todoList = conf.get('todo-list');
    if (todoList) {
        todosList = todoList.filter((task, index) => {
            return tasks.indexOf((index + 1).toString()) === -1
        })

        conf.set('todo-list', todosList);
        console.log(
            chalk.cyan.bold('Removed todos')
        )
    } else {
        console.log(
            chalk.red.bold('No Todos to Remove')
        )
    }
    list()
}



module.exports = remove