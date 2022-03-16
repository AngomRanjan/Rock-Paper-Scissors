function playRound(playerSelection, computerSelection) {
    // your code here!
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
function game(playerSelection='rock')
{   
    if(win===5||lost===5)
    {
       if(win>lost) msg2='Final Result : Congratulation! You Won.';
       else msg2='Final Result : Hard Luck! You Lost.';
       document.getElementById("resultText").textContent= msg2;
       document.getElementById("scoreTitle").textContent= "GAME-OVER! FINAL-SCORE";
    //    document.getElementById("usrWeapons").disp
    let child = document.getElementById("usrWeapons");
    child.style.display='none';
    child = document.getElementById("comWeapons");
    child.style.display='none';
    // child.parentNode.removeChild(child);
    } 
    else {
    let computerSelection = computerPlay();
    gRound++;
    document.getElementById("resultText").textContent='round ' +gRound+" - "+playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase());
    document.getElementById("uScore").textContent=win;
    document.getElementById("cScore").textContent=lost;
    }      
}
//   let playerSelection = "rock";

  let win=lost=draw=gRound=0;    
  let msg1=msg2='';
  const section = document.getElementById('Rock');

// Print the selected target
document.getElementById('Rock').addEventListener('click', function(){game('rock');});
document.getElementById('Paper').addEventListener('click', function(){game('paper');});
document.getElementById('Scissors').addEventListener('click', function(){game('scissors');});
//   console.log(game());//   choice.addEventListener("click",alert($(this).text()));
//   document.getElementById("resultText").textContent = p;
//   p=document.getElementById("uScore").textContent
 
//   alert(msg1+'\n'+msg2);
  