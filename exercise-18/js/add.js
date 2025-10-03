let addForm = document.forms["addForm"];
addForm.addButton.onclick = function (e) {
let task = {
		title: addForm.title.value,
		description: addForm.description.value
};
		if (addForm.status.checked){
				task.status = true;
		}else{
				task.status = false;
		}
let	tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
		tasks.push(task);
		localStorage.setItem("tasks", JSON.stringify(tasks));
		location.href = 'index.html';
}

