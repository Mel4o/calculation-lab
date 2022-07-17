function tela4() { 
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
  text('X-19=24', 200, 80);
  
  image(obj1, 30, 85, 140, 95)
  fill('Black');  
  textSize(25);
  text('43', 100, 155);
  image(obj2, 230, 60, 140, 130)
  fill('Black');  
  textSize(25);
  text('34', 300, 155);
  image(obj3, 235, 225, 125, 110)
  fill('Black');  
  textSize(25);
  text('52', 300, 300);
  image(obj4, 30, 230, 150, 105)
  fill('Black');  
  textSize(25);
  text('30', 105, 305); 
  
  fill(' #d5d5d5')
  rect(280, 450, 80, 40);
  fill('#23238E')
  textSize(20)
  text("Menu",320, 475)
  
   //comandos da fase 2
 if(tela==4){
    if (mouseX>=70 && mouseX<=140 && mouseY>=260 &&mouseY<=320){
      if (mouseIsPressed) {//balão verde
        tela=5
    }
  }    else if(mouseX>=65 && mouseX<=135 && mouseY>=110 &&mouseY<=170){
    if (mouseIsPressed){//balão amarelo
      tela=7
    }
   }else if(mouseX>=265 && mouseX<=335 && mouseY>=110 &&mouseY<=170){
    if (mouseIsPressed){//balão azul
      tela=5
    } 
    }else if(mouseX>=265 && mouseX<=335 && mouseY>=260 &&mouseY<=320){
     if (mouseIsPressed)//balão vermelho
      tela=5
      }    
    }
}  