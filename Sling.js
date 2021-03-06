class Sling{
    constructor(bodyA, pointB){
       var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.08,
           length:0.5,
           damping:0.0001
       }
        this.sling=Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
    
        if(this.sling.bodyA){
            var pointA= this.sling.bodyA.position;
            var pointB=this.sling.pointB;
            push();
            stroke(48, 22, 8)
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x, pointB.y);
            pop();
        }
       
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body;
    }
}