
function setup() {
createCanvas(1500,650);
}

function draw() {
  noCursor();
background(255);
var colore1, colore2, colore3;
if (mouseX <= 750) {
  var colore1 = 42;
  var colore2 = 253;
  var colore3 = 48;
} else {
  var colore1 = 255;
  var colore2 = 0;
  var colore3 = 60;
}
  for(var x = 0; x < 1500; x += 185) {
      for(var y = 0; y < 600; y += 210){
        noStroke();
        fill(colore1,colore2,colore3);
        rect(x+140,y+90,30,60);
        rect(x+60,y+90,80,50);
        rect(x+30,y+90,30,60);
        rect(x+30,y+90,30,60);
        rect(x+40,y+70,120,20);
        rect(x+50,y+60,100,10);
        rect(x+70,y+50,60,10);

        //white rect
        fill(255);
        rect(x+30,y+110,10,40);
        rect(x+40,y+120,10,20);
        rect(x+40,y+80,10,10);
        rect(x+40,y+70,20,10);
        rect(x+50,y+60,20,10);
        rect(x+60,y+90,60,30);
        rect(x+70,y+80,40,50);
        rect(x+110,y+50,20,20);
        rect(x+130,y+50,20,20);
        rect(x+140,y+70,20,20);
        rect(x+130,y+110,40,20);
        rect(x+140,y+100,20,40);

        //black rect
        fill(0);
        noStroke();
        rect(x+20,y+90,10,60);
        rect(x+30,y+70,10,20);
        rect(x+40,y+60,10,10);
        rect(x+50,y+50,20,10);
        rect(x+70,y+40,60,10);
        rect(x+130,y+50,20,10);
        rect(x+150,y+60,10,10);
        rect(x+160,y+70,10,20);
        rect(x+170,y+90,10,60);
        rect(x+140,y+150,30,10);
        rect(x+150,y+160,10,20);
        rect(x+140,y+180,10,10);
        rect(x+60,y+190,80,10);
        rect(x+50,y+180,10,10);
        rect(x+40,y+160,10,20);
        rect(x+30,y+150,30,10);
        rect(x+60,y+140,80,10);
        rect(x+80,y+150,10,20);
        rect(x+110,y+150,10,20);

      }
      }

function oneup() {
  noStroke();
  fill(23,163,60);
  rect(mouseX+20,100,50,30);
  rect(mouseX+30,130,140,40);
  rect(mouseX+30,170,130,10);
  rect(mouseX+30,180,120,20);
  rect(mouseX+60,120,100,10);
  fill(255);
  rect(mouseX+30,110,30,10);
  rect(mouseX+40,120,20,70);
  rect(mouseX+70,130,20,50);
  rect(mouseX+80,180,20,10);
  rect(mouseX+100,130,10,50);
  rect(mouseX+120,130,20,60);
  rect(mouseX+140,130,10,10);
  rect(mouseX+150,140,10,20);
  rect(mouseX+140,160,10,10);

}
  oneup(mouseX,mouseY);


}
