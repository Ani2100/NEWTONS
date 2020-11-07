class Bob {
    constructor(x,y,radius)
    {
        var options={
            isStatic:false,
            restritution:0.3,
            friction:0.5,
            density:1.15

        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world, this.body);
    }
    display()
    {
        var paperpos=this.body.position;
        
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(100,0,200)
        ellipse(0,0,this.radius,this.radius);
        ellipse(CENTER);
        pop()
    }
}
