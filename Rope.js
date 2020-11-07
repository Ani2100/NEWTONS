class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(5);

        var string1x = pointA.x;
        var string1y = pointA.y;

        var string2x = pointB.x+this.offsetX;
        var string2y = pointB.y+this.offsetY;

        line(string1x, string1y, string2x, string2y);
    }
}