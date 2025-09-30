let counter = document.getElementById("counter");
let restart = document.getElementById("restart");
let increase = document.getElementById("increase");
let decrease = document.getElementById("reduce");
let num = 0;

restart.onclick = function () {
		num = 0;
		counter.innerText = `${num}`;
}

increase.onclick = function () {
		num += 1;
		counter.innerText = `${num}`;
}

decrease.onclick = function () {
		num -= 1;
		counter.innerText = `${num}`;
}
