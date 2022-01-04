class Chao{
    constructor(x,y,w,h){

        var options = {
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(mundo,this.body);

    }
    display(){

        var chaoPos = this.body.position;

        push();
        transleiter(chaoPos.x,chaoPos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(255,255,0);
        rect(0,0,this.w,this.h);
        pop();

    }
}