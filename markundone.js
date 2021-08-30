const conf = new (require('conf'))
const chalk = require('chalk');
const list = require('./list');

function markUndone(tasks) {
    let todoList = conf.get('todo-list');

    if (todoList) {
        todosList = todoList.map((task, index) => {
            if (tasks) {
                const newindex = index + 1;
                if (tasks.indexOf(newindex.toString()) !== -1) {
                    task.done = false;
                }
            }
            return task;
        })

        conf.set('todo-list', todosList);
    }
    console.log(
        chalk.green.bold('Tasks have been marked Not done')
    )
    list()
}

module.exports = markUndone