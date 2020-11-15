class Plinko{
    
    constructor(x, y, r){

        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(x, y, this.r, options);
        this.r = r;
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.r, this.r);

    }

}