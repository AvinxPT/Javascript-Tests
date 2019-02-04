var x1= 100;
var y1= 200;
var dx1= 5;
var dy1= 5;

var y2= 100;
var dy2= 10;

//var y3= 100;
//var dy3= 2;



const canvas = document.getElementById('test');
const context = canvas.getContext('2d');


window.addEventListener("keyup",controls);


function main(){
	context.clearRect(0,0,500,500);
	drawCaixa();
	drawPlayer1();

}

function drawCaixa(){
	context.fillStyle="#000000";
	context.fillRect(0,0, 500, 500);

}

function drawBola(){
	
	//inicio da bola
	context.beginPath();
	context.fillStyle="#ffffff";
	context.arc(x1,y1,20,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	//fazer a bola bater nas paredes dentro do height e width do canvas
	//if(x1<=0 || x1>=500) dx1=-dx1;
	if(y1<=0 || y1>=500) dy1=-dy1;
	if(x1<=0 || x1>=500) dx1=-dx1;
	//if(x1<=0 || x1>=500){
	//x1= 250;
	//y1= 200;
	//}
	
	//dx1=-dx1;
	x1+=dx1;
	y1+=dy1;
}

function drawPlayer1(){

	context.beginPath();
	context.fillStyle="#ffffff";
	context.fillRect(0, y2, 25, 100);
	context.fill();
//	if(y2<0 || y2>400) dy2=-dy2;
//	y2+=dy2;
		if (y2 < 0){
		y2=0;
		} else if (y2 >400){
		y2=400;
		} else {
		y2=y2;
	}
}


//Função de controlo do Player1
function controls(key){
//	alert("Po caralho");
	if(key.keyCode == "38"){
		y2-=dy2;
	} else if (key.keyCode == "40"){
		y2+=dy2;
	} else {
		y2=y2;
	}
}




setInterval(main,10);


