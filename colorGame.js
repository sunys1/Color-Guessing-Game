numOfSquares = 6;
var colors = generateColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var	msgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

//More convinient in case of adding more difficulty levels
for(var i = 0; i < mode.length; i++){
	//Remove class "selected" from both buttons to be sure that
	//no one has the class.
	mode[i].addEventListener("click", function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		//Add class "selected" to whichever button clicked
		this.classList.add("selected");
		this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
		reset();
	
	})
}

function reset(){
	//generate all new colors  
	colors = generateColors(numOfSquares);
	//pick a new random color from the colorList;
	pickedColor = pickColor();
	//change colorDisplay to matched color
	colorDisplay.textContent = pickedColor;
	// Set message display back to empty string
	msgDisplay.textContent = "";
	resetBtn.textContent = "New Colors";
	//Change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}else{
			squares[i].style.display = "none";
		}
		h1.style.backgroundColor = "steelblue";
	}
}

resetBtn.addEventListener("click", function(){
	reset();	
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor /*(works for all browsers)*/ = colors[i];

	//add click listeners to squares	
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;	
		//compare color to pickedColor
		if(clickedColor === pickedColor){
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

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
		squares[i].style.backgroundColor = color; 	
	}
	
}

function generateColors(num){
	//make an array
	var colorList = [];
	//repeat num times
	for(var i = 0; i < num; i++){
	//generate random color and push them into colorList
		colorList.push(randomColor());
	}
	return colorList;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}



