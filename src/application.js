var prevTime = Date.now();

var game = new Game();
var keyboard = new Keyboard();

function run()
{
	var currTime = Date.now();
	var deltaTime = currTime - prevTime;
	prevTime = currTime;

	game.update(deltaTime);
	game.draw();
};