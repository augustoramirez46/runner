class Personaje {
    constructor(tipo) {
        // constructor(tipo){
        this.tipo = tipo;
        this.pX = width / 2;
        this.pY = 630;
        this.estado = 2;
        //  }

    }
    dibujar() {

        switch (this.tipo) {
            case 1:
                fill(0, 255, 0);
                break;
            case 2:
                fill(255, 0, 0);
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
        ellipse(this.pX, this.pY, 15, 15);
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




