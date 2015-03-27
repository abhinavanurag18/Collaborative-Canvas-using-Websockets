var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
var context;


$(document).ready(function(){
	var c = $("#canvas");
	context = c[0].getContext("2d");

	$('#canvas').mousedown(function(e){
		var mouseX = e.pageX;
		var mouseY = e.pageY;

		paint = true;
		addClick(mouseX,mouseY);
		redraw();
	});

	$('#canvas').mousemove(function(e){
		if(paint){
			addClick(e.pageX, e.pageY, true);
			redraw();
		}
	});

	$('#canvas').mouseup(function(e){
		paint = false;
	});

	$('#canvas').mouseleave(function(e){
		paint = false;
	});
});

function addClick(x, y, dragging)
{

	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
}

function redraw(){
	context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

	context.strokeStyle = "#df4b26";
	context.lineJoin = "round";
	context.lineWidth = 5;

	for(var i=0; i < clickX.length; i++) {		
		context.beginPath();
		if(clickDrag[i] && i){
			context.moveTo(clickX[i-1], clickY[i-1]);
		}else{
			context.moveTo(clickX[i]-1, clickY[i]);

		}
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		context.stroke();
	}
}


