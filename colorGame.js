var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var	msgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected"); 
	hardBtn.classList.remove("selected"); 
});
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected"); 
	hardBtn.classList.add("selected"); 
});

colorDisplay.textContent = pickedColor;
resetBtn.addEventListener("click", function(){
	//generate all new colors  
	colors = generateColors(6);
	//pick a new random color from the colorList;
	pickedColor = pickColor();
	//change colorDisplay to matched color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
		squares[i].style.backgroundColor /*(works for all browsers)*/ = colors[i];
	}
	h1.style.backgroundColor = "#232323";
})

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor /*(works for all browsers)*/ = colors[i];

	//add click listeners to squares	
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;	
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			msgDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor	;
			resetBtn.textContent = "play again?";
		}else {
			this.style.backgroundColor = "#232323";
			msgDisplay.textContent = "Try Again";	
		}	

	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
	//change each color to match given color
		squares[i].style.backgroundColor = color; 	
	}
	
}

function generateColors(num) {
	//make an array
	var colorList = [];
	//repeat num times
	for(var i = 0; i < num; i++) {
	//generate random color and push them into colorList
		colorList.push(randomColor());
	}
	return colorList;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}



