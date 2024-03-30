import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "asadTodo",
            message: "what do you want to add in your todo list",
            type: "input"
        },
        {
            name: "addMore",
            message: "Do you want to add more",
            type: "confirm",
            default: "false"
        }]);
    console.log(addTask.todo);
    condition = addTask.addMore;
    todos.push(addTask.todo);
}
