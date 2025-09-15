//Define a class that reprsents the task.

class Task{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.status = false;
    }
    
    save(){
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        let task = {
            title: this.title,
            description: this.description,
            status: this.status
        };
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    static edit(id, key, value){
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        if (id < 1 || id >= tasks.length + 1){
            throw new Error('Id not found.')
        }
        tasks = JSON.parse(localStorage.getItem("tasks"));
        let myTask = tasks[id - 1];
        myTask[key] = value;
        tasks.splice(id, 1, myTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    static delete(id){
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        if (id < 1 || id > tasks.length){
            throw new Error("Id not found.");
        }else{
            delete tasks[id - 1];
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }
}

//Define home function

function home(){
    console.log('Welcome to Alpha ToDo');
    console.log('1.Create A Task.');
    console.log('2.View Tasks.');
    console.log('3.Delete A Task.');
    let choice = prompt('Chose: ');
    if (choice !== null){
        choice = Number(choice);
        if (!isNaN(choice)){
            switch (choice){
                case 1:
                createTask();
                break;
                case 2:
                viewTasks();
                break;
                case 3:
                deleteTask();
                break;
                default:
                home();
            }
        }else{
            console.log('Wrong input. Please try again');
            home();
        }
    }else{
        console.log("Good Bye");
    }
}

//Define createTask function

function createTask(){
    console.log('Create A Task');
    let title = prompt('The title of your task: ');
    let description = prompt('Description: ');
    preview({'title':title, 'description':description, 'status':false});
}

// Define the preview function
 
function preview(task){
    console.log('Preview Your Task');
    for (let key in task){
        console.log(`${key}:${task[key]}`);
    }
    let $confirm = confirm('Do you want to save?');
    if ($confirm){
        task = new Task(task['title'], task['description'], task['status']);
        task.save();
    }else{
        home();
    }
}

//Create the viewTasks function

function viewTasks(){
    console.log('View Tasks');
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let i = 1;
    for (let data of tasks){
        console.log(`Task ${i}`);
        i ++;
        for (let key in data){
            console.log(`${key}:${data[key]}`);
        }
    }
    let taskId = prompt("Chose a task: ");
    console.log(`1.Edit`);
    console.log(`2.Mark as Done`);
    console.log(`3.Unmark As Done.`);
    cosole.log('4.Go back');
    let choice = prompt('Chose: ', 0);
    switch (choice){
        case 0:
        home();
        break;
        case 1:
        editTask(taskId);
        break;
    }
}

home();

