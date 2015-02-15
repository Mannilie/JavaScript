(function() 
{
	var jsAppFiles = [
		'src/keyboard.js',
		'src/circle.js',
		'src/game.js',
		'src/application.js',
		'main.js'
	];

	for(var fileIndex = 0;
		fileIndex < jsAppFiles.length; 
		++fileIndex)
	{
		var js = document.createElement("script");
		js.type = "text/javascript";
		js.src = jsAppFiles[fileIndex];
		document.body.appendChild(js);		
	}
})();