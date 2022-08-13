const daysA = document.getElementById("days");
const hoursA = document.getElementById("hours");
const minsA = document.getElementById("mins");
const secondsA = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function countdown() {
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearsDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = (Math.floor(totalSeconds / 60) % 24) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	daysA.innerHTML = days;
	hoursA.innerHTML = hours;
	minsA.innerHTML = minutes;
	secondsA.innerHTML = seconds;

	//console.log(days, hours, minutes, seconds);
}
//initial call
countdown();

setInterval(countdown, 1000);
