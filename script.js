//import { without } from 'lodash';

var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var initialColor = document.querySelector("p");

// color1.addEventListener("input", function() {
// 	console.log(color1.value);
// 	body.style.background = "linear-gradient(to right, " 
// 		+ color1.value 
// 		+ "," 
// 		+ color2.value 
// 		+ ")";
// })

// color2.addEventListener("input", function() {
// 	body.style.background = "linear-gradient(to right, " 
// 		+ color1.value 
// 		+ "," 
// 		+ color2.value 
// 		+ ")";
// })

body.style.background = setGradient();

function setGradient() {
		body.style.background = "linear-gradient(to right, " 
		+ color1.value 
		+ "," 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}

// function showInitialColor() {
// 	initialColor.textContent = input.value;
// }



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


