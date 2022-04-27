function setup()
{
canvas=createCanvas(300,300);
canvas.center();
background("white");
}
function preload()
{
classifier=ml5.imageClassifier("DoodleNet");
}
function clearCanvas()
{
background("white");
}
function draw()
{
strokeWeight(13);
stroke("black");
if(mouseIsPressed)
{
line(pmouseX,pmouseY,mouseX,mouseY);
}
}