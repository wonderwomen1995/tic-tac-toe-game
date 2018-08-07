var numsquare=9;
var name1=prompt("Enter player1 name");
var name2=prompt("Enter player2 name");
var square=document.querySelectorAll(".square");
var p=document.querySelector(".message");
var h1=document.querySelector("h1");
var newgamebutton=document.querySelector("#newgame");
var twocolor=["red","yellow"];
var change=document.querySelector("#displayname");
if(name1===null){
  name1="PLAYER 1";
}
if(name2===null){
  name2="PLAYER 2";
}
for(var i=0;i<square.length;i++){
	
       
       	square[i].style.background="white";
       
	}
  var flag=true;
  var t=2;
 
for(var j=0;j<square.length;j++){
	square[j].addEventListener("click",function(){
		     
     if(t===1){
      var win;
      if(flag){
        win=1;
      }else{
        win=0;
      }
     	h1.style.background=twocolor[win];
     	p.textContent="wow you got it";
     	newgamebutton.textContent="Play Again?";
      
     	for(var k=0;k<square.length;k++){
     		square[k].style.background=twocolor[win];
     	}
     }
     else if(t===0){
        h1.style.background="blue";
      p.textContent="game Draw";
      newgamebutton.textContent="Play Again?";
      for(var k=0;k<square.length;k++){
        square[k].style.background="blue";
      }
     }

     else{
      if(this.style.background!==twocolor[1]&&this.style.background!==twocolor[0]){
      if(flag){
     	p.textContent=name2 +" its your turn";
     	this.style.background=twocolor[1];
      this.style.color=twocolor[1];
      flag=!flag;
     }
     else{
      p.textContent=name1+ " its your turn";
      this.style.background=twocolor[0];
       this.style.color=twocolor[0];
      flag=!flag;
     }
   }
  }
      t=checkwin();
      if(t===1){
      var win;
      if(flag){
        win=0;
      }else{
        win=1;
      }
      h1.style.background=twocolor[win];
      if(win===1){
      p.textContent="Congratulations "+name1+" You Won This Game";
    }else{
      p.textContent="Congratulations "+name2+" You Won This Game";
    }
      newgamebutton.textContent="Play Again?";
      
      for(var k=0;k<square.length;k++){
        square[k].style.background=twocolor[win];
      }
     }
     else if(t===0){
        h1.style.background="blue";
      p.textContent="game Draw";
      newgamebutton.textContent="Play Again?";
      for(var k=0;k<square.length;k++){
        square[k].style.background="blue";
      }
     }

	});
}

newgamebutton.addEventListener("click",function(){
   flag=true;
   t=2;
   for(var i=0;i<square.length;i++){
	 	square[i].style.background="white";
    var z=i+1;
    square[i].style.color="rgb("+ 0 + ", " + 0 + ", " + z + ")";
     p.textContent=" "; 	}
	h1.style.background="#dd1818";
});



function checkwin()
{
 
  if (square[0].style.color === square[1].style.color && square[1].style.color === square[2].style.color)

    return 1;
  else if (square[3].style.color === square[4].style.color && square[4].style.color === square[5].style.color)

    return 1;
  else if (square[6].style.color === square[8].style.color && square[8].style.color === square[7].style.color)

    return 1;
  else if (square[0].style.color === square[3].style.color && square[3].style.color === square[6].style.color)

    return 1;
  else if (square[1].style.color === square[4].style.color && square[4].style.color === square[7].style.color)

    return 1;
  else if (square[2].style.color === square[5].style.color && square[5].style.color === square[8].style.color)

    return 1;
  else if (square[0].style.color === square[4].style.color && square[4].style.color === square[8].style.color)

    return 1;
  else if (square[2].style.color === square[4].style.color && square[4].style.color === square[6].style.color)

    return 1;
  else if (square[0].style.color !=="rgb(0, 0, 1)"  && square[2].style.color !=="rgb(0, 0, 3)"  && square[3].style.color !=="rgb(0, 0, 4)"  
                    && square[4].style.color !=="rgb(0, 0, 5)" && square[5].style.color !=="rgb(0, 0, 6)" && square[6].style.color !=="rgb(0, 0, 7)"  
                  && square[7].style.color !=="rgb(0, 0, 8)" && square[8].style.color !=="rgb(0, 0, 9)"  && square[1].style.color !=="rgb(0, 0, 2)" )

    return 0;
  else
    return -1;
}

