class Paper{
    constructor(x,y,r){
        var options={
          isStatic:false,
          restitution:0.3,
          friction:0.3,
          density:1.3
        }
        
        this.body=Bodies.circle(this.x, this.y,50, options)
        this.x=x;
        this.y=y;
        this.r=50
        World.add(world,this.body)
    }
    display(){

        var pos = this.body.position

        push()
        translate(pos.x,pos.y)
        strokeWeight(4)
        stroke("red")
        fill("white")
        ellipse(100,630,50,50);
        pop()
    }
}