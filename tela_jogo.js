let obj1;
let obj2;
let obj3;
let obj4;

function preload() {
  obj1 = loadImage('frAZUL.png');
  obj2 = loadImage('frROXO.png');
  obj3 = loadImage('frVERDE.png');
  obj4 = loadImage('frVERMELHO.png');
}

function tela2(){ 
  background(imagem2)
  
  fill('black')
  rect(70, 300, 70, 30);
  fill('black')
  rect(65, 150, 70, 30);
  fill('black')
  rect(265, 150, 70, 30);
  fill('black')
  rect(265, 300, 70, 30);
  
  fill('Black');  
  textSize(25);
  text('Qual número que substitui X?', 195, 50);
  fill('Black');  
  textSize(25);
  text('8+X=21', 200, 80);
  
  image(obj1, 30, 85, 140, 95)
  fill('Black');  
  textSize(25);
  text('12', 100, 155);
  image(obj2, 230, 60, 140, 130)
  fill('Black');  
  textSize(25);
  text('16', 300, 155);
  image(obj3, 235, 225, 125, 110)
  fill('Black');  
  textSize(25);
  text('9', 300, 300);
  image(obj4, 30, 230, 150, 105)
  fill('Black');  
  textSize(25);
  text('13', 105, 305);

   
  fill('#d5d5d5')
  rect(280, 450, 80, 40);
  fill('#23238E')
  textSize(20)
  text("Menu",320, 475)
} 