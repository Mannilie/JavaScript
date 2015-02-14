var KEY_SPACE = 32;
var KEY_ENTER = 13;


var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

//Obtains the client's Width and Height
var canvasWidth = document.body.clientWidth;
var canvasHeight = document.body.clientHeight;

//Sets the canvas to be the client's dimensions
canvas.width = canvasWidth;
canvas.height = canvasHeight;

//Box with shadow
context.save(); //Saves the state of the current context

var rectWidth = 300;
var rectHeight = 300;
var rectX = canvasWidth / 2 - (rectWidth / 2);
var rectY = canvasHeight / 2 - (rectHeight / 2);
context.rect(rectX, //x coordinate
			 rectY, //y coordinate
			 rectWidth, //Width
			 rectHeight); //Height

context.fillStyle = 
		"rgb(255, 25, 255)"; //The color to fill
							 //in the object with

context.fill(); //Fills in the object using set attributes
context.shadowColor = "rgb(0, 0, 0)"; 
context.shadowBlur = 20;
context.shadowOffsetX = 3; //Offset position of the shadow
context.shadowOffsetY = 5;
context.stroke(); //Draws the shadow

context.restore(); //Returns previously saved path state 
		//^		   //and attributes
		//|
		//Using this before drawing every object will prevent
		//the previous object's attributes (i.e, Stroke, 
		//Shadow, etc) from changing the next object's 
		//attributes

//<-- Text Rendering -->
var message = "Hello "; //Declares a new variable and 
						//JavaScript automatically converts
						//the type to be a "string"
message += "world!"; //Appends "world!" to string

context.font = "18px Arial"; 
var textMeasure = context.measureText(message); 
							//^
							//|
							//Gets the width of the string
							//in pixels

context.fillStyle = "black";
context.fillText(message, 100, 100);
				 //^       ^    ^
				 //|	   |    |
				 //|	   |	x coordinate
				 //|	   y coordinate
				 //text to output (message)


//canvas.addEventListener("onkeydown", onKeyPressed);

var turnOnGravity = false;
var fallingSpeed = 1;
document.onkeypress = function (event)
{
	var key = event.keyCode;
	if(key == KEY_ENTER)
	{
		createCircle();
	}
	if(key == KEY_SPACE)
	{
		turnOnGravity = true;
	}
}

function runApp()
{
	context.clearRect ( 0 , 0 , canvasWidth, canvasHeight );
	for(var circleIndex = 0;
		circleIndex < circleObjects.length; 
		++circleIndex)
	{
		if(turnOnGravity == true)
		{
			if(circleObjects[circleIndex].y < canvasHeight -
				circleObjects[circleIndex].radius)
			{
				circleObjects[circleIndex].y += fallingSpeed;
			}
		}

		context.fillStyle = circleObjects[circleIndex].color;
	
	  	context.beginPath(); //Begins path for drawing shape
	  	context.arc(circleObjects[circleIndex].x, //x pos
	  				circleObjects[circleIndex].y,//y pos
	  				circleObjects[circleIndex].radius,
	  				0, Math.PI * 2, true);
	  	context.closePath(); //Ends path
	  	context.fill(); //Fills in circle with the previously
	  					//specified color
	}
}

var circleObjects = [];

function createCircle()
{
	var maxRad = 50;
	var minRad = 10;

	var circle = {};
	circle.color = "red";
	circle.x = Math.random() * canvasWidth;
	circle.y = Math.random() * canvasHeight;
	circle.radius = Math.random() * (maxRad - minRad) + minRad;
	circle.color = "rgb(" + Math.round(Math.random() * 255) + ","
	                   + Math.round(Math.random() * 255) + ","
	                   + Math.round(Math.random() * 255) + ")";
	circleObjects.push(circle);
}


{
	for(var circleIndex = 0;
		circleIndex < circleObjects.length; 
		++circleIndex)
	{
		if(circleObjects[circleIndex].y >= 
			canvasHeight -
			circleObjects[circleIndex].radius)
		{
			continue;
		}
		circleObjects[circleIndex].y += fallSpeed;
	}	
}

function createRandomCircles()
{
	var maxRad = 50;
	var minRad = 10;
	var circleAmount = 100;
	for(var circleIndex = 0; //Initializer
		circleIndex < circleAmount; //Condition
		++circleIndex) //Increment
	{
	 	context.fillStyle = //Fills in the circle with a random
	 						//Color
	 			"rgb(" + Math.round(Math.random() * 255) + ","
	                   + Math.round(Math.random() * 255) + ","
	                   + Math.round(Math.random() * 255) + ")";
	
	  	context.beginPath(); //Begins path for drawing shape
	  	context.arc(Math.random() * canvasWidth, //x pos
	  				Math.random() * canvasHeight,//y pos
	  				Math.random() * (maxRad - minRad) + minRad,
	  				0, Math.PI * 2, true);
	  	context.closePath(); //Ends path
	  	context.fill(); //Fills in circle with the previously
	  					//specified color
	}
}


(function() 
{
	var onEachFrame;
	if (window.requestAnimationFrame) 
	{
		onEachFrame = function(callback) 
		{
			var _callback = function() 
			{ 
				callback(); 
				window.requestAnimationFrame(_callback); 
			}
			_callback();
		};
	} 
	else if (window.mozRequestAnimationFrame) 
	{
		onEachFrame = function(callback) 
		{
			var _callback = function() 
			{ 
				callback(); 
				window.mozRequestAnimationFrame(_callback); 
			}
			_callback();
 		};
 	} 
 	else 
 	{
		onEachFrame = function(cb) 
		{
			setInterval(cb, 1000 / 60);
		}
	}
	window.onEachFrame = onEachFrame;
})();

window.onEachFrame(runApp);

//<-- End-of-file -->




//var element = canvas.getContext("2d");
//function fullscreen(){
//	var el = document.getElementById('gameCanvas');
//    if(el.webkitRequestFullScreen) {
//        el.webkitRequestFullScreen();
//    }
//    else {
//    	el.mozRequestFullScreen();
//    }            
//}
//canvas.addEventListener("click",fullscreen);
