class Personaje {
    constructor(tipo) {
        // nave blanca
            this.nav0 = [];
            for(this.i=0; this.i < 3; this.i++){
             this.nav0.push(loadImage("nav0/0nav"+(this.i+1) + ".png"));
            }
            //nave rosa
            this.nav1 = [];
            for(this.i=0; this.i < 3; this.i++){
             this.nav1.push(loadImage("nav1/1nav"+(this.i+1) + ".png"));
            }
            console.log("nave=" + this.nav1.length)
            this.tipo = 2;
            this.pX = width / 2;
            this.pY = 630;
            this.estado = 2;
            //  }
    
    }
    dibujar() {
        imageMode(CENTER);

        switch (this.tipo) {
            case 1:
                fill(0, 255, 0);

                image(this.nav0[this.estado-1], this.pX, this.pY)
                break;
            case 2:
                fill(255, 0, 0);
                image(this.nav1[this.estado-1], this.pX, this.pY)                
                break;
            default:
                 
        }

        switch(this.estado){
            case 1:
             this.pX = 165; 

             break;

            case 2:
             this.pX = width/2;
             break;            
            
            case 3:
             this.pX = 1040;
             break;
        }

     //   if(frameCount % 10 == 0){
       //     this.pY = this.pY + random(-1, 1)*5
       // }
    }

    moverDer(){
        this.estado += 1;
        if(this.estado > 3){
            this.estado = 3;
            return;

    }
}


    moverIzq(){
        this.estado -= 1;
        if(this.estado < 1){
            this.estado = 1;
            return;

    }
    }

}




