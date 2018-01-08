
//Define a function
function sayOuch() {
	alert('Ouch! Stop poking me!');
}

//Use CSS selector to identify an element
var foxImage = document.querySelector('img');

//Assign the function to the onclick event on the img
foxImage.onclick = sayOuch();
