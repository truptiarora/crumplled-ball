class Ground{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }

        this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);

        World.add(world, this.body);

    }

    display(){
        var groundPos=this.body.position;		

       push();
       translate(groundPos.x, groundPos.y);


        rectMode(CENTER);
        strokeWeight(4);
        fill("brown");
        rect( 0, 0, this.width, this.height);
        pop()


          }

}