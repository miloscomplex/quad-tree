class QuadTree {
    constructor(boundary, capacity) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
    }

    subdivide() {
        let x = this.boundary.x;
        let y = this.boundary.y;
        let w = this.boundary.w;
        let h = this.boundary.h;


        let ne = new Rectangle(x + w / 2, y - h/2, w/2, h/2);
        this.northeast = new QuadTree(ne, this.capacity);
        let nw = new Rectangle(x - w / 2, y - h/2, w/2, h/2);
        this.northwest = new QuadTree(nw, this.capacity);
        let se = new Rectangle(x + w / 2, y + h/2, w/2, h/2);
        this.southeast = new QuadTree(se, this.capacity);
        let sw = new Rectangle( x -  w / 2,  y +  h/2, w/2, h/2);
        this.southwest = new QuadTree(sw,  this.capacity);
        this.divided = true;
    }

    insert(point) {
        if (!this.boundary.contains(point)) {
            return;
        }
        if (this.points.length < this.capacity) {
            this.points.push(point);
        } else {
        if (!this.divided) {
            this.subdivide();
            }
        this.northeast.insert(point);
        this.northwest.insert(point);
        this.southeast.insert(point);
        this.southwest.insert(point);
        }
    } 

    show() { 
        stroke(255);
        strokeWeight(1);
        noFill();
        rectMode(CENTER);
        rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h *2);
        if (this.divided) {
            this.northwest.show();
            this.northeast.show();
            this.southwest.show();
            this.southeast.show();
        }
        for (let p of this.points) {
            // strokeWeight(4);
            // point(p.x, p.y);
        }
    }
}