

function playRound(playerSelection, computerSelection) 
{
    if (playerSelection===computerSelection)
    { draw++;
        return 'It is a draw! '+ playerSelection.toUpperCase()+ ' equals ' + computerSelection.toUpperCase();
    }
    else if (playerSelection==='rock' && computerSelection==='scissors' || playerSelection==='paper' && computerSelection==='rock' || playerSelection==='scissors' && computerSelection==='paper')
    {win++;
        return 'You Won! ' + playerSelection.toUpperCase()+ ' beats ' + computerSelection.toUpperCase();
    }
    else if (playerSelection==='rock' || playerSelection==='paper' || playerSelection==='scissors')
    {lost++;
        return 'You Lost! '+ playerSelection.toUpperCase()+ ' beaten by ' + computerSelection.toUpperCase();
    }
    else {
        return 'Invalid input!';        
    }
  }
  
  function computerPlay()
{
    const max=3;
    const min=1;
    let x = Math.round(Math.random()*(max-min))+min;
    if (x===1) {return 'rock';}
    else if(x===2) {return 'paper';}
    else {return 'scissors';}
}
function freezeSelect(elementID)
{
    // statement to temp change to new style
    elementID=document.getElementById(elementID);
    elementID.style.border="6px solid orangered";
    elementID.style.color="blue";
    elementID.style.width="150px";
    elementID.style.height="150px";
}
///test
 function unfreezeSelect(elementID){
     // statement to Retain original Style
     elementID=document.getElementById(elementID);
     elementID.style.border="2px solid yellowgreen";
     elementID.style.color="black";
     elementID.style.width="100px";
     elementID.style.height="125px";
 }
//test ends
function game(playerSelection,computerSelection)
 {  //highlighting selected weapon 
    
    freezeSelect(computerSelection+2);
    //
    gRound++;  
    
    document.getElementById("resultText").textContent='round ' +gRound+" - "+playRound(playerSelection,computerSelection);
    document.getElementById("uScore").textContent=win;
    document.getElementById("cScore").textContent=lost;

    setTimeout(function(){unfreezeSelect(computerSelection+2);},500);
    if(win===5||lost===5){
        document.getElementById("usrWeapons").style.display='none';
        document.getElementById("comWeapons").style.display='none';
        setTimeout(gameOver, 1000);
    }
   
}
function gameOver(){
    if(win>lost) msg2='Final Result : Congratulation! You Won.';
       else msg2='Final Result : Hard Luck! You Lost.';
       document.getElementById("resultText").textContent= msg2;
       document.getElementById("scoreTitle").textContent= "GAME-OVER! FINAL-SCORE";
       let child =document.getElementsByClassName("titleAdd");
    child[0].textContent='Game Over! Click Here To Play Again';
    child[0].classList.add('restart');   
    child[0].addEventListener('click',restart);      
}

function restart(){
    win=lost=draw=gRound=0;
    msg1=msg2='';
    let s=document.getElementById("titleAdd");
    s.textContent='The first to score 5, wins!';
    s.classList.remove('restart');
    s.removeEventListener('click',function(){s= s;});
    document.getElementById("resultText").textContent= "";
    document.getElementById("scoreTitle").textContent= "SCORE-BOARD"; 
    document.getElementById("uScore").textContent=document.getElementById("cScore").textContent=0;
    document.getElementById("usrWeapons").style.display='flex';
    document.getElementById("comWeapons").style.display='flex';     
}

let win=lost=draw=gRound=0;    
let msg1=msg2='';
var computerWeapon;
 // EvenListener
document.getElementById('rock').addEventListener('click', function(){game('rock',computerPlay());});
document.getElementById('paper').addEventListener('click', function(){game('paper',computerPlay());});
document.getElementById('scissors').addEventListener('click', function(){game('scissors',computerPlay());});
