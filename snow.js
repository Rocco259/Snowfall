class Snow{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution:0.3
        }
        this.r = 10;
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x,y,this.r,this.image, options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipse(0,0,this.r,this.r);
        pop();
    }
}