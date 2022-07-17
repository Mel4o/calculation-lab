function mouseClicked() {
  //comando do menu
  if (tela ==1){
  if (mouseX>=125 && mouseX<=275 && mouseY>=125 &&mouseY<=175) {
    tela=2;
  }
  if (mouseX>=125 && mouseX<=275 && mouseY>=195 &&mouseY<=245) {
    tela=3;
  }
//botão de créditos
 if(tela==1){
   if(mouseX>=125 && mouseX<=275 && mouseY>=265 &&mouseY<=315){
     tela=6
   }   
 }    
}
  //comandos da 1º fase
  if(tela==2){
    if (mouseX>=70 && mouseX<=140 && mouseY>=260 &&mouseY<=320) {//pote 1
    tela=4
  }else if(mouseX>=65 && mouseX<=135 && mouseY>=110 &&mouseY<=170){//pote 2
  tela=5
    }else if(mouseX>=265 && mouseX<=335 && mouseY>=110 &&mouseY<=170){//pote 3
      tela=5
    }else if(mouseX>=265 && mouseX<=335 && mouseY>=260 &&mouseY<=320){//pote 4
      tela=5
    }
//botão de menu tela da fase 1
 if(tela==2){
    if (mouseX>=280 && mouseX<=360 && mouseY>=450 &&mouseY<=490){ 
    tela=1
  }
}   
  }
  //botão de menu tela de info
  if(tela==3){
  if (mouseX>=280 && mouseX<=360 && mouseY>=450 &&mouseY<=490){ 
    tela=1
    }
  }  
 //botão de menu dos créditos
 if(tela==6){
    if (mouseX>=280 && mouseX<=360 && mouseY>=450 &&mouseY<=490){ 
    tela=1 
  }
}  
  //botão de menu do gameover
  if(tela==5){
    if (mouseX>=170 && mouseX<=250 && mouseY>=330 &&mouseY<=370){ 
    tela=1 
  }
}    
//botão de menu da fase 2
  if(tela==4){
    if (mouseX>=280 && mouseX<=360 && mouseY>=450 &&mouseY<=490){ 
    tela=1
    }
  }
//botão de menu da tela de vitória  
if(tela==7){
    if (mouseX>=150 && mouseX<=230 && mouseY>=250 &&mouseY<=290){ 
    tela=1 
    }
  }   
//botão de replay da tela de vitória  
if(tela==7){
    if (mouseX>=150 && mouseX<=230 && mouseY>=300 &&mouseY<=340){
    tela=2 
    }
  }   
}