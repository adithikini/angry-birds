class Pig extends Baseclass{
    constructor(x,y){
        super(x,y,50,50)

       this.image=loadImage("pig.png")
       this.visibility=255
        
    }
    display(){
       /* var position=this.body.position
        imageMode(CENTER)*/

        if(this.body.speed <5){
            super.display()

        }
        else{
            World.remove(world,this.body)
            push()
            this.visibility=this.visibility-5
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,50,50)
            pop()
        }
        
    }
    
    score(){
        if(this.visibility <0 && this.visibility >-1005){
            score++
        }
    }

}