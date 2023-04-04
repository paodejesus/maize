let gap = 10;
let cirNum = 40;
let cirSize = 20;
let angle = 0;
let ptNum = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
}

function draw() {
  background('black');
  //custom shape for mouse
  noCursor();
  noStroke();
  fill('white');
  circle(mouseX, mouseY, 5);
  
  
  //main graph
  push();
  translate(width/2, height/2);
  rotate(angle);
  //angle = map(mouseX, 0, width, -1, 1)
  angle = angle + map(mouseX, 0, width, -0.2, 0.2)
  noFill();
  stroke('white');
  strokeWeight(1);
  for (let i = 0; i < cirNum; i++) {
    
    
  arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle, 360 - i  );
  }
  pop();
  
  //random noise
  

  stroke('white');
  strokeWeight(1);
  for (let i =0; i < ptNum; i++){
  point(random(width), random(height));
  }
 
  
  //title 
  push();
   translate(width/2, height - 80);
  noStroke();
  textFont('Helvetica');
  textSize(15);
  textAlign(CENTER, CENTER);
  text('In Space And Time', 0, 0);
  pop();
  
  
  
  
}
