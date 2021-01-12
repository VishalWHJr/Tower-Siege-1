class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        push();
        rectMode(CENTER);
        fill("#87CEEA")
        rect( pos.x, pos.y, this.width, this.height);
        pop();
      }

      display1(){
        var pos= this.body.position;
        push();
        rectMode(CENTER);
        fill("#FFC0CB")
        rect( pos.x, pos.y, this.width, this.height);
        pop();
      }
      display2(){
        var pos= this.body.position;
        push();
        rectMode(CENTER);
        fill("#3FE0D0")
        rect( pos.x, pos.y, this.width, this.height);
        pop();
      }

      display3(){
        var pos= this.body.position;
        push();
        rectMode(CENTER);
        fill("#808080")
        rect( pos.x, pos.y, this.width, this.height);
        pop();
      }
  }