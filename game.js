$(window).load(function () {
	game.init();
	//window.setTimeout(r.draw(150,150), 20);
});

document.oncontextmenu =function  () {
	return false;
};
onKey=function  (e) {

};
onClick=function  (mouse) {
	
		
};
onmousemove =function  (mouse) {
	
};
var game={
	init:function  () {
		game.canvas=document.getElementById('gamecanvas');
		game.ctx=game.canvas.getContext('2d');
		document.getElementById('gamebody').addEventListener('click',onClick,true);
		
		game.update();
		//
	},
	
	update:function  () {
		game.ctx.clearRect(0,0,game.canvas.width,game.canvas.height);

		
		window.setTimeout(game.update, 30);
	},
};

//util
function distance (x,y,x1,y1) {
	var dx = Math.abs(x-x1);
	var dy = Math.abs(y-y1);
	return Math.floor( Math.sqrt((dx*dx)+(dy*dy)) );
};
function drawCircle (ctx,x,y,r,color) {
	ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle =color;
    ctx.fill();
};
function drawLine (ctx,x,y,x1,y1) {
	  ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x1, y1);
      ctx.stroke();
};

