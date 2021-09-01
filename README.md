# Todo Command Line Application

## Very Simple and Easy to use Todo Command Line application.

## Can Also be imported as a logger in Programs.

### How to use ?

- #### npm install -g cliTodo
- #### todo --help
- #### t -h

### Both t/todo can be used

- ##### t l => listing todos
- ##### t a => add todo
- ##### t -h =>todo help
- ##### t md =>make todo done
- ##### t mu =>undone a todo
- ##### t rm =>remove todo
- ##### t ra =>remove all todos
- ##### t n <1 or 0> => 1 for enabling desktop notification, 0 for disabling desktop notification (TEST FEATURE)
  - ###### Notifications will pop when completed a task.

# Wanto to use Programatically or as logger, Go ahead and import (Experimental).

- ### Export Mode Example

  - ```js
    import todo from "cli-todo-app";
    try {
      todo.ra(); //clear all logs
      todo.n("0"); //disable desktop notifications
      todo.a(["working"]);
      todo.md(["1"]);
      todo.mu(["1"]);
      todo.rm(["1"]);
      todo.l();
      todo.ra(); //clear all
    } catch (e) {
      //do nothing keep silent (intentional for CLI use)
    }
    ```

![image](https://user-images.githubusercontent.com/51844798/131375910-8d59ff9e-1395-487e-a84f-6ed334e9c188.png)
![image](https://user-images.githubusercontent.com/51844798/131709159-33d980ec-e951-481f-b0da-064093b0cefd.png)

# Contribute
 - ## The objective of this simple project is to Give a flexible CLI tool for Todo App.
 - ## But also to use it as a Logger during Program Execution with Sharablility.
 - ## If u want to contribute, Fork the repo and make pull request from it of any new features. 
