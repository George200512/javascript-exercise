import displayCalendar from './calendar.js';

//Show calendar of a specified year

function showCalendar(){
		while (true) {
					let year = prompt("Enter a year to display its calendar: ");
		if (year === null){
				year = new Date().getFullYear();
		}else if(!isFinite(year.trim())){
				alert("Wrong input.");
		}else{
						year =  parseInt(year.trim());
		}
		displayCalendar(year);
				break;
}
		}
	

(function () {
		let $continue;
		do{
				showCalendar();
				$continue = confirm("Do you want to continue?");
		}while($continue);
})();