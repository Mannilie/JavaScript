var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

//Obtains the client's Width and Height
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

(function() {
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

window.onEachFrame(run);
//<-- End-of-file -->