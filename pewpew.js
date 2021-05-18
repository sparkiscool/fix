class pewpew {
    comstructor(bodyA, pointB){

    
    var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.4,
        length : 10
    }
    this.pointB = pointB
    this.pewness = Constraint.create(options)
    
    World.add(world,this.pewness)
}
display(){
    if(this.pewness.bodyA){
    var pointA = this.pewness.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    //line(this.pewness.bodyA.position.x,this.pewness.bodyA.position.y,this.pointB.x,this.pointB.y)
}

fly(){
this.pewness.bodyA = null
}
}