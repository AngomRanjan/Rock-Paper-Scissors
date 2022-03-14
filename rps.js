function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection===computerSelection)
    { 
        return 'It is a draw! '+ playerSelection.toUpperCase()+ ' equals ' + computerSelection.toUpperCase();
    }
    else if (playerSelection==='rock' && computerSelection==='scissors' || playerSelection==='paper' && computerSelection==='rock' || playerSelection==='scissor' && computerSelection==='paper')
    {win++;
        return 'You Won! ' + playerSelection.toUpperCase()+ ' beats ' + computerSelection.toUpperCase();
    }
    else if (playerSelection==='rock' || playerSelection==='paper' || playerSelection==='scissors')
    {lost++
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
    for (let counter=1;counter<=1;counter++)
    {   let computerSelection = computerPlay();
        gRound=counter;
        console.log('round ' +gRound+" - "+playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase()));
    }
    if(win>lost) msg2=msg2+'Final Result : Congratulation! You Won.';
    else if(win<lost) msg2=msg2+'Final Result : Sorry! You Lost.';
    else return msg2=msg2+'Final Result : It is a Draw!';
    return msg2;
}
//   let playerSelection = "rock";
  let win=lost=gRound=0;
  let msg1=msg2='';
  let p=console.log(game());
//   alert(msg1+'\n'+msg2);
  