
    
var context;
var x, y, r;
var width, height;
var dx = dy = 2;

window.onload = function() {
    
    context = myCanvas.getContext('2d');
    
    x = width = myCanvas.width/2;
    y = height = myCanvas.height/2;
    r = myCanvas.height/4;
    myCanvas.height *=2;
    setInterval(draw, 30);

    
};

function draw() {

    context.clearRect(0, 0, width*100, height*100);

    context.beginPath();
    context.fillStyle = "#8B4513";
    context.arc(x, y*2.1, r, 0, Math.PI*2, true); 
    context.lineWidth = height/20;
    context.strokeStyle = "#9d4e15";
    context.stroke();
    context.closePath();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "#8B4513";
    context.arc(x, y+height, r/1.5, 0, Math.PI*2, true);  
    context.lineWidth = height/20;
    context.strokeStyle = "#9d4e15";
    context.stroke();
    context.closePath();
    context.fill();
    
    drawFace();
    drawEars();
    drawLegs();

    
    
    if(y < height || y> (height*1.5) ) 
        dy=-dy;
    y+=dy;
    
    
}

function drawFace() {
    
    context.beginPath();
    context.fillStyle = "#FFFFFF";
    context.arc(x-width/25, y+height, r/5, 0, Math.PI*2, true);  
    context.lineWidth = height/20;
    context.strokeStyle = "#FFFFFF";
    context.stroke();
    context.closePath();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "#FFFFFF";
    context.arc(x+width/25, y+height, r/5, 0, Math.PI*2, true);  
    context.lineWidth = height/20;
    context.strokeStyle = "#FFFFFF";
    context.stroke();    
    context.closePath();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "#000000";
    context.arc(x-width/25, y+height, r/8, 0, Math.PI*2, true);  
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle = "#000000";
    context.arc(x, y+height*1.15, r/9, 0, Math.PI*2, true); 
    context.lineWidth = height/100;
    context.strokeStyle = "#000000";
    context.stroke();  
    context.closePath();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "#000000";
    context.arc(x+width/25, y+height, r/8, 0, Math.PI*2, true);  
    context.closePath();
    context.fill();

}

function drawEars() {
    
    context.beginPath();
    context.fillStyle = "#8B4513";
    context.moveTo(x-width/10, y+height*0.85);
    context.quadraticCurveTo(x-width/7, y-height/2, x-width/1000, y+height*0.75);  
    context.lineWidth = height/20;
    context.strokeStyle = "#9d4e15";
    context.stroke();
    context.closePath();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "#8B4513";
    context.moveTo(x+width/10, y+height*0.85);
    context.quadraticCurveTo(x+width/7, y-height/2, x-width/1000, y+height*0.75);
     context.lineWidth = height/20;
    context.strokeStyle = "#9d4e15";
    context.stroke();
    context.closePath();
    context.fill();
    
}

function drawLegs() {
    
    context.beginPath();
    context.fillStyle = "#8B4513";
    context.moveTo(x-width/5, y+height*1.4);
    context.quadraticCurveTo(x-width/2, y+height, x-width/7.5, y+height*1.3);  
    context.lineWidth = height/20;
    context.strokeStyle = "#9d4e15";
    context.stroke();
    context.closePath();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "#8B4513";
    context.moveTo(x+width/5, y+height*1.4);
    context.quadraticCurveTo(x+width/2, y+height, x+width/7.5, y+height*1.3);
     context.lineWidth = height/20;
    context.strokeStyle = "#9d4e15";
    context.stroke();
    context.closePath();
    context.fill();
    
}
