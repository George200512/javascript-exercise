const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let addButton, container, deleteButton, editButton;
if (!Boolean(tasks) && tasks.length === 0){
		const para = document.createElement('p');
		para.appendChild(document.createTextNode("No task added."));
		document.body.appendChild(para);
		addButton = document.createElement('button');
		addButton.textContent = 'Add task.';
		addButton.setAttribute("id", "addTask");
		document.body.appendChild(addButton);
}

		tasks.forEach((v, i, a) => {
				container = document.createElement("div");
				container.setAttribute("id", `${i}`);
				const para = document.createElement('p');
				para.textContent = `Title: ${v.title}`;
				container.appendChild(para);
				const para2 = document.createElement('p');
				para2.textContent = `Description: ${v.description}`;
				container.appendChild(para2);
				if (Boolean(v.status)){
						const para = document.createElement('p');
				para.textContent = `Status: Done`;
				container.appendChild(para);
				}else{
						const para2 = document.createElement('p');
				para2.textContent = `Status: Not Done`;
				container.appendChild(para2);
				}
				document.body.appendChild(container);
				editButton = document.createElement("button");
				editButton.textContent = "Edit";
				document.body.appendChild(editButton);
				deleteButton = document.createElement("button");
				deleteButton.textContent = 'Delete';
				document.body.appendChild(deleteButton);
				document.body.append(document.createElement('hr'));
		});
		addButton = document.createElement('button');
		addButton.textContent = 'Add task.';
		addButton.setAttribute("id", "addTask");
		document.body.appendChild(addButton);


addButton.onclick = function (e) {
		e.preventDefault();
		window.location.href = "add.html";
}

editButton.onclick = function (e) {
		e.preventDefault();
		let id = e.target.parentElement.id;
		console.log(id);
		localStorage.setItem("selectedItemId", JSON.stringify({"id":id}));
		window.location.href = "edit.html";
}

deleteButton.onclick = function (e) {
		e.preventDefault();
		let id = e.target.parentElement.id;
		localStorage.setItem("selectedItemId", JSON.stringify({"id":id}));
		window.location.href = "delete.html";
}