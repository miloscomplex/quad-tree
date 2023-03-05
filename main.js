let capacity = 4;
let points = 500;
let qt;


function setup() {
  background(0);
  createCanvas(400, 400);

  let boundary = new Rectangle(200, 200, 200, 200);
  qt = new QuadTree(boundary, capacity);
  console.log(qt);
  
  // for (let i=0; i < points; i++) {
  //   let p = new Point(random(width), random(height));
  //   qt.insert(p);
  // }

  background(0);
  qt.show();

}


function draw() {
  if (mouseIsPressed) {
    for (let i=0; i < 5; i++) {
      let m = new Point(mouseX+random(-5,5), mouseY+random(-5,5));
      qt.insert(m);
    }
  }
  background(0);
  qt.show();


}