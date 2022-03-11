function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection==computerSelection)
    {
        msg1=msg1+'Round-'+gRound+' : It is a draw! '+ playerSelection.toUpperCase()+ ' equals ' + computerSelection.toUpperCase()+'\n';
        return 'Round-'+gRound+' : It is a draw! '+ playerSelection.toUpperCase()+ ' equals ' + computerSelection.toUpperCase();
    }
    else if (playerSelection==='rock' && computerSelection==='scissors' || playerSelection==='paper' && computerSelection==='rock' || playerSelection==='scissor' && computerSelection==='paper')
    {
        win++;
        msg1=msg1+'Round-'+gRound+' : You Won! ' + playerSelection.toUpperCase()+ ' beats ' + computerSelection.toUpperCase()+'\n';
        return 'Round-'+gRound+' : You Won! ' + playerSelection.toUpperCase()+ ' beats ' + computerSelection.toUpperCase();
    }
    else if (playerSelection==='rock' || playerSelection==='paper' || playerSelection==='scissors')
    {
        lost++;
        msg1=msg1+'Round-'+gRound+' : You Lost! '+ playerSelection.toUpperCase()+ ' beaten by ' + computerSelection.toUpperCase()+'\n';
        return 'Round-'+gRound+' : You Lost! '+ playerSelection.toUpperCase()+ ' beaten by ' + computerSelection.toUpperCase();
    }
    else {
        msg1=msg1+'Round-'+gRound+' : Invalid input!\n'; 
        return 'Round-'+gRound+' : Invalid input!';        
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
        gRound=counter;
        playerSelection=prompt(msg1+'\n'+'Round-'+counter+' Enter your Choice :',playerSelection);
        console.log(playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase()));
    }
    if(win>lost) msg2=msg2+'Final Result : Congratulation! You Won.';
    else if(win<lost) msg2=msg2+'Final Result : Sorry! You Lost.';
    else return msg2=msg2+'Final Result : It is a Draw!';
    return msg2
}
  let playerSelection = "rock";
  let win=lost=gRound=0;
  let msg1=msg2='';
  console.log(game());
  alert(msg1+'\n'+msg2);
  