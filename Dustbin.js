/*class Dustbin{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 15;
        this.height = 80;
        World.add(world, this.body);

        

    }

      display(){
        push();
        rectMode(CENTER);
        rect(600 , 550 , this.width, this.height);
        
      }
    }*/

    class Dustbin {
      constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
      }
    };
        
        
       
          


