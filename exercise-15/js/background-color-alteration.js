//Get all forms in the document
const forms = document.forms;

// Get the for that allows you choose a color
let form1 = forms["form1"];

// Get the input type
form1.userChoice.onchange = function () {document.body.style.backgroundColor = form1.userChoice.value; }