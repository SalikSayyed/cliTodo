const conf = new (require('conf'))
const chalk = require('chalk')
const list = require('./list')

function markDone(tasks) {
    let todosList = conf.get('todo-list')
    if (todosList) {
        //loop over the todo list tasks
        todosList = todosList.map((task, index) => {
            //check if the user specified the tasks to mark done
            if (tasks) {
                //check if this task is one of the tasks the user specified
                const newindex = index + 1;
                if (tasks.indexOf(newindex.toString()) !== -1) {
                    //mark only specified tasks by user as done
                    task.done = true
                }
            }
            return task
        });

        //set the new todo-list
        conf.set('todo-list', todosList)
    }

    //show the user a message
    console.log(
        chalk.green.bold('Tasks have been marked as done successfully')
    )
    list()
}

module.exports = markDone