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
}


let task1 = new Task('Monday', 'Go to school');
//task1.save()
//localStorage.removeItem('tasks');

//console.log(Task.edit(1, "title", "Tuesday"));
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(tasks[0].title);