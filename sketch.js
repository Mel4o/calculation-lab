//video 1: https://youtu.be/3Vh9hfmncv4
//video 2: https://youtu.be/hhZCw7I6KPc
//video 3: https://youtu.be/AbvsvyBxwuQ
var imagem1;
var imagem2;
var imagem3;
var imagem4;
var imagem5;
var imagem6;
var tela = 1;
let = borda = 125
let snd;
var texto1 = "Calculation Lab"

//function preload() {
 // soundFormats('mp3');
//  snd = loadSound("Green_Hill_Zone.mp3");
//  snd.setVolume(0.1)
  //snd.loop();
//}
//function keyTyped() {
  //if (key === 'a') 
   //snd.play("Green_Hill_Zone.mp3");
  //}
function setup() {
  createCanvas(400, 500);
  imagem1 = loadImage('laboratorio.jpg');
  imagem2 = loadImage('dentrolab.jpeg');
  imagem3 = loadImage('instrucoes.png');
  imagem4 = loadImage('fimjogo.png');
  imagem5 = loadImage('vitoria.png');
  imagem6 = loadImage('creditos.png');
  
}
function draw() {
 if(tela==1){
    background(imagem1,70)
    tela1();
  }
  //entrando na tela da fase 1
  if(tela==2){
    background(imagem2,70)
    tela2()
  }
  //entrando na tela das informações
  if(tela==3){
    background(imagem3,70)
    tela3()
  }
  //entrando na tela da fase 2
  if(tela == 4){
    background(0,0,0)
    tela4()
  }
  //entrando na tela de gameover
  if(tela == 5){
    background(0, 0, 0)
    tela5()
  }
  //entrando na tela de créditos
  if(tela == 6){
   background(0, 0, 0)
   tela6()
  }
  //entrando na tela de vitória
  if(tela == 7){
   background(0, 0, 0)
   tela7()
  }
}