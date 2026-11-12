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

//set up for retrieving cookie data
function getCookie(cookieKey) {
    let name = cookieKey + "="; //saves the data of cookieKey into a variable called name
    let myCookie = document.cookie.split(";"); //splits the cookie data into an array of individual cookies
    
    for(let i = 0; i < myCookie.length; i++) { //This loop iterates the length of the myCookie array, which contains all the cookies stored in the browser
        let theCookie = myCookie[i]; //saves the array fo cookie data into a variable called theCookie
        while (theCookie.charAt(0) == ' ') { //another loop that goes through every character of the cookie string and checks if the first character is a space
            theCookie = theCookie.substring(1); //Everytime the loop has found a leading space it removes it by using the substring method, which returns a part of the string starting from the index 1, which is the second character of the string
        }
        if (theCookie.indexOf(name) == 0) { //checks if the current cookie starts with the name variable
            return theCookie.substring(name.length, theCookie.length); //returns the value of the cookie if it matches the name variable
        }
    }
    return ""; //returns an empty string if the cookie is not found
}

getCookie("First_name"); //calls the getCookie function with the argument "First_name" to retrieve the value of the cookie with that name
console.log(getCookie("First_name")); //logs the value of the "First_name" cookie to the console

//Local Storage set up
sessionStorage.setItem("RandomNumber", 3); //sets a key-value pair in the session storage
console.log(sessionStorage.getItem("RandomNumber")); //logs the value of the item from the session storage