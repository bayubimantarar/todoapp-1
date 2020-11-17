function someDates() {
	let d = new Date();

	console.log(d);
	console.log('The getFullYear() method returns the full year of a date: ' + d.getFullYear());
	console.log('The getTime() function returns the number of milliseconds since then: ' + d.getTime());
	console.log('The toUTCString() method converts a date to a UTC string (a date display standard): ' + d.toUTCString());
}