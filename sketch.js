let fondo;
let nave;
let f = 0;
let pantalla;

function setup() {
    createCanvas(1200, 700);
    fondo = [];
    for (let i = 0; i <241; i++) {
       if( i < 101){ 
         fondo.push(loadImage("fondo/bg" + i + ".png"));
        print("fondo" + i);
       }else{if(i>=101){
        fondo.push(loadImage("fondo/bg" + "0" + i + ".png"));
        print("fondo" + i);
       }
    }
    }
    nave = new Personaje(2);
    pantalla = 2;

}


function draw() {
 switch(pantalla){


    case 2:
     escenario();  
     break;  




 }

 pillarMiMouse();
 ellipse(width/2, height/2, 15,15);
 nave.dibujar();

}

function mousePressed(){
}

function keyPressed(){
    if (keyCode == LEFT_ARROW) {
        nave.moverIzq();
   }else{
    if (keyCode == RIGHT_ARROW) {
       nave.moverDer();
   }
}
return 0;


   }
  

function escenario(){

    frameRate(30);
    image(fondo[f], 0, 0);
            f++;
            if (f >= fondo.length) {
                f = 0;
            }

}
function pillarMiMouse(){
    fill (255);
    textSize(16);
    textAlign(CENTER);
    text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
  }


