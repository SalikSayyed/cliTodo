const conf = new (require('conf'))
const chalk = require('chalk')
const list = require('./list')
const notifier = require('node-notifier');
const path = require('path');
const Quote = require('inspirational-quotes');

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
                    if(conf.get('cli-todo-notifications')=='1'){
                    notifier.notify(
                        {
                          title: 'Congratulations! Reward yourself for completing :'+ task.text,
                          message: Quote.getRandomQuote(),
                          icon: path.join(__dirname, './assets/200.gif'),
                          sound: true, 
                          wait: true 
                        }
                      );
                    }
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