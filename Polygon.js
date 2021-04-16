class Polygon{

    constructor(){
        var ground_options={
    
          }
        
          this.body = Bodies.rectangle(110,150,50,50,ground_options)
          World.add(world,this.body);
          this.img=loadImage("polygon.png");
    }
    display(){
      
        imageMode(CENTER);
        image(this.img,this.body.position.x,this.body.position.y,50,50);
    }
}