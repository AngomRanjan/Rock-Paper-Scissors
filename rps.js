function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection==computerSelection)
    {
        return 'It is a draw!';
    }
    else if (playerSelection==='rock' && computerSelection==='scissors' || playerSelection==='paper' && computerSelection==='rock' || playerSelection==='scissor' && computerSelection==='paper')
    {
        win++;
        return 'You Won! ' + playerSelection.toUpperCase()+ ' beats ' + computerSelection.toUpperCase();
        
    }
    else if (playerSelection==='rock' || playerSelection==='paper' || playerSelection==='scissors')
    {
        lost++;
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
function game()
{
    for (let counter=1;counter<=5;counter++)
    {   let computerSelection = computerPlay();
        playerSelection=prompt('Round-'+counter+' Enter your Choice :',playerSelection);
        console.log(playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase()));
    }
    console.log(win+' -- '+lost);
    if(win>lost) return 'Final Result : Congratulation! You Won.';
    else if(win<lost) return 'Final Result : Sorry! You Lost.';
    else return 'Final Result : It is a Draw!';
}
  let playerSelection = "rock";
  let win=lost=0;
  console.log(game());