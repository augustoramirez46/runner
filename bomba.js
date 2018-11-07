class Bomba {


    constructor(ruta) {
        this.bomba = loadImage("cosos/bomba.png")        
        this.tam=0.1;
     // imagen.push(loadImage("fondo.jpg"));
        // constructor(tipo){
        this.tipo = tipo;
        this.pX = width / 2;
        this.pY = height / 2;
      //  this.ruta = 1;
        this.velX = 6;
        this.velY = 3.5;
        this.ruta = ruta;
        //  }


        console.log(ruta);

    }

    dibujar(){
     imageMode(CENTER);
    switch(this.ruta){
      case 1:
      fill(255);
      break;
      case 2:
      fill(155);
      break;
      case 3:
      fill(55);
      break;
    }
     
     image(this.bomba, this.pX, this.pY, this.tam, this.tam);
;
    }

  
     mover(){
        switch(this.ruta){
         //va a l;a izquierda
            case 1:
            
             if(frameCount % 1 == 0){ 
                this.pX -= this.velX;
                this.pY += this.velY;
                this.tam++;
                this.tam = this.tam * 1.08
    
                this.velY = this.velY * 1.05
                this.velX = this.velX * 1.05
             }
              break;
              
         //baja
            case 2:
            if(frameCount % 1 == 0){ 
              //  this.pX -= this.velX;
                this.pY += this.velY;
                this.tam++;
                this.tam = this.tam * 1.08
    
                this.velY = this.velY * 1.05
             //   this.velX = this.velX * 1.05
             }
              break;




            case 3:
         //pega pa la derecha
           if(frameCount % 1 == 0){ 
             this.pX += this.velX;
             this.pY += this.velY;
             this.tam++;
             this.tam = this.tam * 1.08
             this.velY = this.velY * 1.05
             this.velX = this.velX * 1.05
           }
          break;

        
        }
       
    }





}