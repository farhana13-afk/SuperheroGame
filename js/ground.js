class Ground{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,1350,20,options);
        this.width = 1350;
        this.height = 20;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
      }
    };
  