var Game = function()
{
	this.theApp = new CircleGame();
	this.update = function(deltaTime)
	{
		this.theApp.update(deltaTime);
	};
	this.draw = function()
	{
		this.theApp.draw();
	};
};