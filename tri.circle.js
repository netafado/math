class GameObject{
    constructor(x,y, color){
        this.x = x;
        this.y = y;
        this.posX = x;
        this.posY = y;
        this.color = color;
    }
    update(){

    }
    draw(ctx){

    }
}

class Circulando extends GameObject{
    constructor(x, y, color, w, h, offset, type){
        super(x, y, color);
        this.w = w;
        this.h = h;
        this.offset = offset;
        this.angle = 0;
        this.degree = (Math.PI * 2) / 360;
        this.vel = 2;
        this.type = type;
        console.log(this.angle);
    }

    draw(ctx){

        ctx.fillStyle = this.color;
        ctx.font="15px Georgia";
        if(this.type === "circulando"){
            ctx.fillText("Circulo trigonométrico", 340 , 240 );
        }
        else if(this.type === "seno"){
            ctx.fillText("Sine wave", 30 , 140 );
        }
        else if(this.type === "cosseno"){
            ctx.fillText("Cosine wave", 650 , 140 );
        }    
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    update(){
        if(this.type === "circulando")
        {
            this.x = this.posX + (Math.cos(this.angle) * this.offset);
            this.y = this.posY + (Math.sin(this.angle) * this.offset);
        }
        if(this.type === "seno")
        {
            this.x = this.posX;
            this.y = this.posY + (Math.sin(this.angle) * this.offset);
        }
        else if(this.type === "cosseno"){
            this.x = this.posX + (Math.cos(this.angle) * this.offset);
            this.y = this.posY ;          
        }


        this.angle += this.degree * this.vel;
    }
}


class Game {
    constructor(canvas, w, h){
        this.w = canvas.width = w;
        this.h = canvas.height = h;
        this.ctx = canvas.getContext('2d');
        this.circulando = new Circulando(this.w / 2, this.h /2,'#FFF' ,20, 20, 50,'circulando')
        this.seno = new Circulando(this.w * .1, this.h *.1, '#FFF' ,10, 10, 50 ,'seno');
        this.cosseno = new Circulando(this.w * .8, this.h *.1, '#FFF' ,10, 10, 50 ,'cosseno')
        this.init();
    }
    init(){
        window.requestAnimationFrame(this.loop.bind(this));
    }
    loop(){
        this.update();
        this.draw(this.ctx);

        window.requestAnimationFrame(this.loop.bind(this));
    }
    update(){
        this.circulando.update(); 
        this.seno.update();
        this.cosseno.update();
    }
    draw(ctx){
        ctx.clearRect(0, 0, this.w, this.w)
        this.circulando.draw(ctx);
        this.seno.draw(ctx);
        this.cosseno.draw(ctx);
    }
}

game = new Game( document.getElementById('canvas'), 800, 600 );


// eventos
