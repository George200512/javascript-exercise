//Define a class that reprsents the task.

const tasks = [];

class Task{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.status = false;
    }
    
    save(){
        let task = {
            title: this.title,
            description: this.description,
            status: this.status
        };
        tasks.push(tasks);
        localStorage.setItem('tasks', tasks);
    }
    
    static edit(id){
        if (id < 1 || id > tasks.length + 1){
            throw new Error('Id not found.')
        }
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        return tasks[id - 1]
    }
}


let task1 = new Task('Monday', 'Go to school');
task1.save()

console.log(Task.edit(1));