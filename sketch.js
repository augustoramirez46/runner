let fondo;
let vp;
let disparando;
let f = 0;

function setup() {
    createCanvas(1200, 700);
    fondo = [];
    for (let i = 0; i <241; i++) {
       if( i < 101){ 
         fondo.push(loadImage("images/bg" + i + ".png"));
        print("fondo" + i);
       }else{if(i>=101){
        fondo.push(loadImage("images/bg" + "0" + i + ".png"));
        print("fondo" + i);
       }
    }
    }


}


function draw() {
 escenario();

}

function mousePressed(){
  
}
function escenario(){

    frameRate(30);
    image(fondo[f], 0, 0);
            f++;
            if (f >= fondo.length) {
                f = 0;
            }

}
