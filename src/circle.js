var CircleGame = function() {

	this.circleObjects = new Array();
	this.turnOnGravity = false;
	this.fallingSpeed = 1;

	this.update = function(deltaTime)
	{
		if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true)
		{
			this.createCircle();
		}
		if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
		{
			if(this.turnOnGravity == false)
			{
				this.turnOnGravity = true;
			}
			else
			{
				this.turnOnGravity = false;
			}
		}
		for(var circleIndex = 0;
			circleIndex < this.circleObjects.length; 
			++circleIndex)
		{
			if(this.turnOnGravity == true)
			{
				if(this.circleObjects[circleIndex].y < canvas.height -
					this.circleObjects[circleIndex].radius)
				{
					this.circleObjects[circleIndex].y += this.fallingSpeed;
				}
			}
		}
	};

	this.draw = function()
	{
		context.clearRect ( 0 , 0 , canvas.width, canvas.height );
		for(var circleIndex = 0;
			circleIndex < this.circleObjects.length; 
			++circleIndex)
		{
			context.fillStyle = this.circleObjects[circleIndex].color;
		
		  	context.beginPath(); //Begins path for drawing shape
		  	context.arc(this.circleObjects[circleIndex].x, //x pos
		  				this.circleObjects[circleIndex].y,//y pos
		  				this.circleObjects[circleIndex].radius,
		  				0, Math.PI * 2, true);
		  	context.closePath(); //Ends path
		  	context.fill(); //Fills in circle with the previously
		  					//specified color
		}
	};

	this.createCircle = function()
	{
		var maxRad = 50;
		var minRad = 10;

		var circle = {};
		circle.color = "red";
		circle.radius = Math.random() * (maxRad - minRad) + minRad;

		var circleBoundaries = [];
		circleBoundaries[0] = canvas.width - circle.radius;
		circleBoundaries[1] = canvas.height - circle.radius;

		circle.x = Math.random() * (circleBoundaries[0] - circle.radius) + circle.radius;
		circle.y = Math.random() * (circleBoundaries[1] - circle.radius) + circle.radius;

		circle.color = "rgb(" + Math.round(Math.random() * 255) + ","
		                   + Math.round(Math.random() * 255) + ","
		                   + Math.round(Math.random() * 255) + ")";
		this.circleObjects.push(circle);
	};
};