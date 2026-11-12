//This is the functions.js file for my portfolio

// set up cookies
function setCookie(cookieKey, cookieValue, exdays) {
	const cookieDate = new Date(); //This const contains always a new date, which is alwys the most recent timestamp 
	const expiryDaysInMs = exdays * 24 * 60 * 60 * 1000; //This const calculates and store the time to set up the expiry date later on

	cookieDate.setTime(cookieDate.getTime() + expiryDaysInMs); //Here I set up the timer by retrieving the current time with the .getTime function and adding the time range we declared in expiryDaysInMs before

	let expires = "expires="+ cookieDate.toUTCString();

	document.cookie = cookieKey + "=" + cookieValue + ";" + expires + ";path=/";
}

setCookie("First_name", "Finn", 28);