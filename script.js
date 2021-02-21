'use strict';

 let secertNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore=0;
//console.log(secertNumber);
//console.log(secertNumber);



document.querySelector('.check').addEventListener('click',function()
{

  const guess=Number(document.querySelector('.guess').value);
  if(!guess){
    document.querySelector('.message').textContent="No number🤷‍♂️";
  }
 else if (guess === secertNumber){
      document.querySelector('.message').textContent="correct answer 😍";
      document.querySelector('body').style.backgroundColor="#60b347";
      document.querySelector('.number').style.width="32rem";
      document.querySelector('.number').textContent=secertNumber;
      if(score>highScore){
          document.querySelector('.highscore').textContent=score;
      }
      else{
        document.querySelector('.highscore').textContent=highScore;
      }

  }

  else if (guess > secertNumber) {
      if(score>1){
    document.querySelector('.message').textContent="Too High😂";
    score--;
    document.querySelector('.score').textContent=score;
      }
    else {
        document.querySelector('.message').textContent="You lost 👎";
        document.querySelector('.score').textContent=0;
    }
  }

  else if(guess < secertNumber) {
    if(score>1){
        document.querySelector('.message').textContent="Too Low 😴";
        score--;
        document.querySelector('.score').textContent=score;
          }
        else {
            document.querySelector('.message').textContent="You lost 👎";
            document.querySelector('.score').textContent=0;
        }
  }

});

document.querySelector('.check').removeEventListener('click',function(){
  
});


document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').style.width="15rem";
    document.querySelector('.number').textContent="?";
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.guess').value="";

});

