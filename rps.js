function playRound(playerSelection, computerSelection) {
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
function game(playerSelection,computerSelection)
 {   //let computerSelection = computerPlay();
    gRound++;
    document.getElementById("resultText").textContent='round ' +gRound+" - "+playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase());
    document.getElementById("uScore").textContent=win;
    document.getElementById("cScore").textContent=lost;
    if(win===5||lost===5){
        document.getElementById("usrWeapons").style.display='none';
        document.getElementById("comWeapons").style.display='none';
        setTimeout(gameOver, 1000);
    }
    // {
    //    if(win>lost) msg2='Final Result : Congratulation! You Won.';
    //    else msg2='Final Result : Hard Luck! You Lost.';
    //    document.getElementById("resultText").textContent= msg2;
    //    document.getElementById("scoreTitle").textContent= "GAME-OVER! FINAL-SCORE";
    //     let child = document.getElementById("usrWeapons");
    // child.style.display='none';
    // child = document.getElementById("comWeapons");
    // child.style.display='none';
    // child=document.getElementsByClassName("titleAdd");
    // child[0].textContent='Game Over! Click Here To Play Again';
    // child[0].classList.add('restart');
    // child[0].addEventListener('click',restart);
    // }   
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
  // EvenListener
document.getElementById('Rock').addEventListener('click', function(){game('rock',computerPlay());});
document.getElementById('Paper').addEventListener('click', function(){game('paper',computerPlay());});
document.getElementById('Scissors').addEventListener('click', function(){game('scissors',computerPlay());});

  