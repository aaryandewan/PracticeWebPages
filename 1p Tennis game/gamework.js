var canvas;
var canvasContext;
var x = 20;
var speed = 2;
var y = 20;
var speedY = 5;

var paddleLeftY = 100;
var paddleRightY = 100;
var paddleLeftHeight = 200;
var paddleRightHeight = 200;

var leftScore = 0;
var rightScore = 0;

window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	canvas.addEventListener('mousemove', function(evt){
	var mousePos = calculateMousePosition(evt);
	paddleLeftY = mousePos.y;
	});

	setInterval(both, 5);

}
function both(){
	move();
	draw();
}

function computermove(){
	if (paddleRightY > y){
		paddleRightY-=2;
	} 
	else{
		paddleRightY+=2;
	}
}



function move(){
	computermove();
	x+=speed;
	y+=speedY;
	if (x>canvas.width){
		
		if (y > (paddleRightY-paddleRightHeight/2) && y < paddleRightY+paddleRightHeight/2){
			speed = -speed;
		}
		else{
			
			ballreset();
			leftScore++;
		}

	}

	if (x<0){
		if ((y > (paddleLeftY-paddleLeftHeight/2)) && (y < paddleLeftY+paddleLeftHeight/2)){
			speed = -speed;


			var temp  = y -(paddleLeftY+paddleLeftHeight/2); 
			speedY = temp;

		}

		else{
			// console.log(y);
			// console.log("paddleLeft:" + paddleLeftY +"and total = " + paddleLeftHeight);
			ballreset();
			rightScore++;
		}

	}

	if (y>canvas.height){
		speedY = -1*speedY;
	}

	if (y<0){
		speedY = -speedY;
	}


}


function draw(){

	drawfig(0, 0, canvas.width, canvas.height,'black');
	drawfig(0, paddleLeftY-paddleLeftHeight/2, 10, paddleLeftHeight, 'white');
	drawfig(790, paddleRightY-50, canvas.width, paddleRightHeight, 'blue');
	//drawfig(x,100, 10,10, 'red');	

	//ball

	drawCricle(x, y, 10,'red');
	canvasContext.fillText(leftScore, 150, 150);
	canvasContext.fillText(rightScore, 650, 500);


	
}


function calculateMousePosition(e){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = e.clientX - rect.left - root.scrollLeft;
	var mouseY = e.clientY - rect.top - root.scrollTop;

	return {
		x:mouseX,
		y:mouseY
	}
}




function drawCricle(centerX, centerY, radius,color){
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius,0, Math.PI*2, true);
	canvasContext.fill();

}


function drawfig(leftX, leftY, rightX, rightY, color){
	canvasContext.fillStyle = color;
	canvasContext.fillRect(leftX, leftY, rightX, rightY);
}


function ballreset(){
	speed=-speed;
	y=canvas.height/2;
	x=canvas.width/2;
}