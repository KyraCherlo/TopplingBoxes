class Box{
    //gives initial value
    constructor(x,y,width,height){           // 2 boxes - redbox, bluebox
        var options = {
            'restitution':0.7,
            'friction':0.8,
            'density':1.2
        
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
      // bluebox.body  
        this.width = width; // these 2 are different
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push(); // start a setting
        translate(pos.x,pos.y); // translate the position of rectangle according to changing angles
        rotate(this.body.angle); //rotate the box
        rectMode(CENTER);

        rect(0,0,this.width,this.height);//change the value to 0,0 ecause translate is already changing x & y
        pop();// stop the setting
    }

    //isTouching(leftRect,rightRect)
    //isTouching(r1,r2)
    //isTouching(topRect,bottomRect)

    // function isTouching(rect1,rect2) // function arguments/parameters
}