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
        if (id < 1 || id > tasks.length || tasks.length === 0){
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
        if (id < 1 || id > tasks.length || tasks.length === 0){
            throw new Error("Id not found.");
        }else{
            tasks.splice(id - 1, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }
    
    static markDone(id){
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        if (id < 1 || id > tasks.length || tasks.length === 0){
            throw new Error("Id not found");
        }else{
            tasks[id - 1].status = true;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
    
    static markUndone(id){
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        if (id < 1 || id > tasks.length || tasks.length === 0){
            throw new Error("Id not found");
        }else{
            let task = tasks[id - 1].status = false;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
}

//Define home function

function home(){
    alert(`
    Welcome to Alpha ToDo
    1.Create A Task.
    2.View Tasks.
    `)
    let choice = prompt('Chose: ');
    if (choice !== null){
        choice = Number(choice);
        if (!isNaN(choice)){
            switch (choice){
                case 1:
                createTask();
                alert('Done !');
                break;
                case 2:
                viewTasks();
                alert('Done !');
                break;
                default:
                home();
            }
        }else{
            alert('Wrong input. Please try again');
            home();
        }
    }else{
        alert("Good Bye");
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
        alert(`${key}:${task[key]}`);
    }
    let $confirm = confirm('Do you want to save?');
    if ($confirm){
        task = new Task(task['title'], task['description'], task['status']);
        task.save();
        alert('Done !');
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
        alert(`Task ${i}`);
        i ++;
        for (let key in data){
            alert(`${key}:${data[key]}`);
        }
    }
    let taskId = Number(prompt("Chose a task: "));
    if (isNaN(taskId)){
        console.log('Invalid input.');
        viewTasks();
    }else{
        alert(
        `1.Edit
        2.Mark as Done
        3.Unmark As Done.
        4. Delete Task
        5.Go back
        `
        );
    let choice = prompt('Chose: ', 0);
        try{
            switch (choice){
        case 0:
        home();
        break;
        case 1:
        editTask(taskId);
                alert('Done');
        break;
        case 2:
        Task.markDone(taskId);
                alert('Done');
        break;
        case 3:
        Task.markUndone(taskId);
                alert('Done');
        break;
        case 4:
        Task.delete(taskId);
                alert("Done");
    }
        }catch(e){
            alert(e.message);
        }
    
    }
}

function editTask(id){
    alert('Edit Task');
    let key = prompt('Enter the key to change: ');
    let value = prompt('Enter the new value: ');
    let validKeys = ['title', 'description', 'status'];
    if (!validKeys.includes(key)){
     alert('Wrong Key');
    }else{
        Task.edit(id, key, value);
        alert('Done');
    }
}

(function(){
    let $continue;
    do{
        home();
    $continue = confirm('Do you want to continue?');
    }while($continue);
})()


