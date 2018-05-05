var canvas=document.querySelector('canvas');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height=window.innerHeight;
 var c = canvas.getContext('2d');
 


var mouse ={
    x: undefined,
    y : undefined
}
var friction=0.9;
var gravity=2;
var colorArray=[
    '#2E112D',
    '#540032',
    '#820333',
    '#C9283E',
    '#F0433A']
window.addEventListener('mousemove',
function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    

})

window.addEventListener('resize',
function(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
init();
}
)

function Circle(x,y,dx,dy,radius){
this.x=x;this.y=y;
this.dy=dy;
this.dx=dx;
this.radius=radius;

this.color=colorArray[Math.floor(Math.random()*colorArray.length)];

this.draw=function(){
c.beginPath();
c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
c.fillStyle=this.color;
c.fill();
};

this.update= function(){
    if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50){
      
    if (this.y+this.radius+ this.dy>canvas.height){
        this.dy=-this.dy*friction;
    }
   
    else
    {this.dy+=gravity;
    }
}
    if (this.x+this.radius+ this.dx>canvas.width||this.x-this.radius<0){
        this.dx=-this.dx;}
        if (this.y+this.radius+ this.dy>canvas.height||this.y-this.radius<0){
            this.dy=-this.dy;}
    this.y +=this.dy;
    this.x +=this.dx;
    
    this.draw();};
}


function init(){
   
    for( var i=0;i<200;i++){
        var radius=Math.random()*25+1;
        var x =Math.random()*(canvas.width-radius);
        var y =Math.random()*(canvas.height - radius);
        var dy=Math.random()*1;
        var dx=Math.random()*1;
        circleArray.push(new Circle(x,y,dx,dy,radius));
        
    }
} var circleArray=[];
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
    
}
init();
animate();