function tela1(){
  background(imagem1, 70)
noStroke()
  
  fill(' #d5d5d5')
  rect(125, 125, 150, 50);
  fill(' #d5d5d5')
  rect(125, 195, 150, 50); 
  fill(' #d5d5d5')
  rect(125, 265, 150, 50);
  
  fill('#B22222');
  textSize(40);
  textAlign(CENTER)
  text(texto1, 200, 100);
  
  fill('#23238E');  
  textSize(25);
  textStyle(ITALIC)
  text('Iniciar', 195, 160);
  text('Informações', 200, 230)
  text('Créditos',200, 300)
  noFill();
  stroke('#8B1A1A')
  rect(125, borda, 150, 50)
}
function mousePressed() {
if (tela ==1){
  if (mouseX>=125 && mouseX<=275 && mouseY>=125 &&mouseY<=175) {
    borda=125
    tela =2
  } else if (mouseX>=125 && mouseX<=275 && mouseY>=195 &&mouseY<=245) {
    borda =195
    tela =3
  }
  else if (mouseX>=125 && mouseX<=275 && mouseY>=265 &&mouseY<=315) {
    borda =265
    tela =6
    }
  }  
}