const conf = new (require('conf'))()
const chalk = require('chalk');
const list = require('./list');

function add(task) {
    let todosList = conf.get('todo-list')
    if (!todosList) {
        todosList = []
    }

    console.log(task);
    task.forEach(element => {
        todosList.push({
            text: element,
            done: false
        })
    });


    //set todos-list in conf
    conf.set('todo-list', todosList)

    //display message to user
    console.log(
        chalk.green.bold('Tasks has been added successfully!')
    )
    list()
}

module.exports = add