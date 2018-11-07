let fondo= [];;
let nave;
let f = 0;
let pantalla;
let bombas;
let platas;
let obstaculo = [];
let buenos = [];
let tipo;
let ruta;
let k;

function preload(){
    for (let i = 0; i <241; i++) {
        if( i < 101){ 
          fondo.push(loadImage("fondo/bg" + i + ".png"));
     //    print("fondo" + i);
        }else{if(i>=101){
         fondo.push(loadImage("fondo/bg" + "0" + i + ".png"));
    //     print("fondo" + i);
        }
     }
     }

}
function setup() {
    createCanvas(1200, 700);
    nave = new Personaje(2);
    bombas = new Bomba(1);
    platas = new Plata(2);
    pantalla = 2;
    obstaculo.push(bombas);
    buenos.push(platas);

}


function draw() {
 switch(pantalla){


    case 2:
     escenario();  
     bombasAzar();
     dinerosAzar();
     for(i=0; i < obstaculo.length; i++){
         if(i != null){
         //les males
         obstaculo[i].dibujar();
         obstaculo[i].mover();
         if ((dist(nave.pX, nave.pY,obstaculo[i].pX, obstaculo[i].pY) < 50)||(obstaculo[i].pY > height+200 )){
            obstaculo.splice(i,1);

       }
 
   
      }
    }
     for(i=0; i < buenos.length; i++){
              //les buenes
              if(i != null){
                //les males
                buenos[i].dibujar();
                buenos[i].mover();

                 if ((dist(nave.pX, nave.pY,buenos[i].pX, buenos[i].pY) < 50)||(buenos[i].pY > height+200 )){
                     buenos.splice(i,1);
        
                }
        //        if(buenos[i].pY > height+200 ){
         //           buenos.splice(i,1);
         //       }
                }
            }
    //  for(i=0; i < buenos.length; i++){
    //     if(i != null){
    //         if(buenos[i].pY > height+200 ){
    //            buenos.splice(i,1);
    //    }
    //  }
    // }

            nave.dibujar();    


     break;  




 }

 pillarMiMouse();




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
    imageMode (CORNER)

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

function bombasAzar(){
    if(frameCount % 20 == 0){
      let y = [1,2,3]
      azarC = random(y);

     print("rutaB" + "=" + azarC);
     k = new Bomba(azarC);
     obstaculo.push(k);
    }
    
}
function dinerosAzar(){
    if(frameCount % 50 == 0){
      let y = [1,2,3]
      azarC = random(y);
     // azar = random(1,2);
     //  print("azar" + "=" + azar);
     print("rutaPL" + "=" + azarC);
     k = new Plata(azarC);
     buenos.push(k);
    }
    
}
