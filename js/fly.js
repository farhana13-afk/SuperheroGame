class Fly{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 20
        }
        this.pointB = pointB
        
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }

    display(){
            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB; 
            stroke("black");
            strokeWeight(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
}
}