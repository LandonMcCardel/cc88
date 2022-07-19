var canvas = new fabric.Canvas("myCanvas");
var ballX = 15;
var ballY = 15;
var ballDimensions = 65;
var ballObject = "";
var holeX = 915;
var holeY = 500;
var holeDimensions = 70;
var holeObject = "";
function uploadBall(){
	fabric.Image.fromURL("ball.png", function(Img){
		ballObject = Img;
		ballObject.scaleToWidth(ballDimensions);
		ballObject.scaleToHeight(ballDimensions);
		ballObject.set({
			left: ballX, top: ballY
		});
		canvas.add(ballObject);
	});
}
function uploadHole(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		holeObject = Img;
		holeObject.scaleToWidth(holeDimensions);
		holeObject.scaleToHeight(holeDimensions);
		holeObject.set({
			left: holeX, top: holeY
		});
		canvas.add(holeObject);
	});
}
function uploadImages(){
	uploadBall();
	uploadHole();
}
window.addEventListener("keydown", keyDown);
function keyDown(e){
	var keyPressed = e.keyCode;
		if(keyPressed == "38"){
			console.log("Moved up!");
			up();
		}
		if(keyPressed == "40"){
			console.log("Moved down!");
			down();
		}
		if(keyPressed == "37"){
			console.log("Moved left!");
			left();
		}
		if(keyPressed ==  "39"){
			console.log("Moved right!");
			right();
		}
	}
	if(ballX == holeX && ballY == holeY){
		console.log("fore");
		document.getElementById("hb3").innerHTML = "fore!";
	}
function up(){
	if(ballY >= 1){
		ballY = ballY - ballDimensions / 2 - 1;
		canvas.remove(ballObject);
		uploadBall();
		console.log("X position: " + ballX + "Y position: " + ballY); 
	}
}
function down(){
	if(ballY < 599){
		ballY = ballY + ballDimensions / 2 - 1;
		canvas.remove(ballObject);
		uploadBall();
		console.log("X position: " + ballX + "Y position: " + ballY); 
	}
}
function left(){
	if(ballX >= 1){
		ballX = ballX - ballDimensions / 2 - 1;
		canvas.remove(ballObject);
		uploadBall();
		console.log("X position: " + ballX + "Y position: " + ballY);
	}
}
function right(){
	if(ballX <= 1100){
		ballX = ballX + ballDimensions / 2 - 1;
		canvas.remove(ballObject);
		uploadBall();
		console.log("X position: " + ballX + "Y position: " + ballY);
	}
}
