class Box
{
    constructor(x,y,width,height)
    {
        var option = {

            isStatic:false,
            restitution:1,
            density:0.5,
            friction:1

        }
        //this.x = x
        //this.y = y
        this.height = height
        this.width = width
        
        this.body = Bodies.rectangle(x,y,this.width,this.height,option)
        World.add(world,this.body)

    }
    display()
    {
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push() 
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("blue")
        rect(0,0,this.width,this.height)
        pop() 
    }
}