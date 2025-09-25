//Declare constants
const monthsInAYear = [
    "January", "February", "March", "April",
"May", "June", "July", "August", "September",
"October", "November", "December"
];
const daysOfTheWeek = [
  "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"
];
const months = {};

//Get the calendar of a certain year
function* calendar(year){
		monthsInAYear.forEach((value, index, array)=>daysInAMonth(year, value, index, array));
		for (let month in months){
				yield months[month];
		}
}

// Get the days of the month
function daysInAMonth(year, value, index, array){
		let days, daysInMonth = [];
		if (index === 1){
				days = isLeap(year) ? 29 : 28;
		}else if([8, 3, 5, 10].includes(index)){
				days = 30;
		}else{
				days = 31;
		}
		for(let date of range(1, days + 1)) {
				daysInMonth.push(new getDay(year, index, date));
		}
		months[value] = daysInMonth;
}

//Check if year is leap or not
	function isLeap(year){
			if (year % 4 === 0){
					return (year % 100 !== 0 || year % 400 === 0);
			}
			return false;
	}

		//Returns an iterator that allows you generate a number from 0 to specified number not included
function* range(start=0, stop, step=1){
		for(let i = start; i < stop; i += step){
				yield i;
		}
}

//Get the day, month and year in the form of an object''
function getDay(year, month, date){
		this.date = date;
		this.month = month;
		this.year = year;
		this.day = new Date(year, month, date).getDay();
		this.isToday = function() {
				let today = new Date();
				return (
				today.getFullYear() === this.year && today.getMonth() === this.month && today.getDate() === this.date
				);
		};
}

// Return the text that displays the date of a month
function displayMonth(days){
		let text = daysOfTheWeek.join(" ") +"\n";
		let start = 0, stop = 0, week = Array(7).fill(" ");
		days.forEach((v) => {
				if(v.isToday()){
						week[v.day] = `(${v.date})`;
				}else{
				week[v.day] = v.date;
				}
				if (v.day === 6){
						text += week.join("    ") + "\n";
						week = Array(7).fill(" ");
				}
		});
		if(week.some(v => v !== " ")){
						text += week.join("    ") + "\n";
				}
		return text;
		}

// Display a text formatted calendar
function displayCalendar(year) {
		let text = "Year: " + year + "\n";
		for (let daysOfAMonth of calendar(year)) {
				let month = monthsInAYear.at(daysOfAMonth[0].month);
				text += `${month}: \n`;
				text += `${displayMonth(daysOfAMonth)} \n`
		}
		alert(text);
}

export default displayCalendar;

