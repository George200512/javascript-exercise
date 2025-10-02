const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let addButton, container;
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
				document.body.append(document.createElement('hr'));
		});
		addButton = document.createElement('button');
		addButton.textContent = 'Add task.';
		addButton.setAttribute("id", "addTask");
		document.body.appendChild(addButton);


addButton.onclick = function () {
		window.location.href = "add.html";
}