// Get the time object

const time = document.getElementById('time');

time.innerText = new Date().toLocaleTimeString();

setInterval(function () {time.innerText = new Date().toLocaleTimeString();}, 1000);