class Crumpeled{
    /* constructor(x,y,width,height){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':1.0,
            'density':1.2
            
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);

        

    }

      display(){
        push();
        rectMode(CENTER);
        rect(200 , 550 , this.width, this.height);
        
      } */
      constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

    }