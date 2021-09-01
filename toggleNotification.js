const chalk = require('chalk')

const conf = new (require('conf'))()

function toggleNotifications(bl){
if(bl==='1'){
    console.log(chalk.red.bold("Notifications ON"));
    console.log(chalk.yellow.bold("NOTE : Turn off notifications by 't n 0' \n if u are not on desktop"))
    conf.get('cli-todo-notifications','1')
}else{
    console.log(chalk.red.bold("Notifications OFF"));
    console.log(chalk.yellow.bold("NOTE : Turn on notifications by 't n 1'"))
    conf.get('cli-todo-notifications','0')
}
    }

module.exports = toggleNotifications