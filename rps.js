function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection==computerSelection)
    {
        return 'It is a draw!';
    }
    else if (playerSelection==='rock' && computerSelection==='scissors' || playerSelection==='paper' && computerSelection==='rock' || playerSelection==='scissor' && computerSelection==='paper')
    {
        return 'You Won! ' + playerSelection.toUpperCase()+ ' beats ' + computerSelection.toUpperCase();
        
    }
    else if (playerSelection==='rock' || playerSelection==='paper' || playerSelection==='scissors')
    {
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
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));