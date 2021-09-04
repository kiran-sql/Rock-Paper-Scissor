let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

rock_div.addEventListener("click", function(){
 Game("r");
});

paper_div.addEventListener("click", function(){
 Game("p");
});

scissors_div.addEventListener("click", function(){
 Game("s");
});

function Game(userchoice){
 const compChoice = getCompChoice();
 switch(userchoice + compChoice)
 {
  case "rs":
  case "sp":
  case "pr":win(userchoice,compChoice);
   break;

  case "rp":
  case "ps":
  case "sr":loose(userchoice,compChoice);
   break;

  default:tie(userchoice);
 }
}

function getCompChoice(){
 const choices=["r", "p", "s"];
  const choice = Math.floor(Math.random()*3);
  return choices[choice];
}

function win(user,comp){
// console.log("You Win");
userScore++;
userScore_span.innerHTML = userScore;
compScore_span.innerHTML = compScore;
result_div.innerHTML = `${convert(user)}${smallUserWord} beats ${convert(comp)}${smallCompWord}. You Win`;
document.getElementById(user).classList.add("green-glow");
setTimeout(function(){document.getElementById(user).classList.remove("green-glow");},500);
}

function loose(user,comp){
//console.log("You Loose");
compScore++;
compScore_span.innerHTML = compScore;
userScore_span.innerHTML = userScore;
result_div.innerHTML = `${convert(comp)}${smallCompWord} beats ${convert(user)}${smallUserWord}. You loose`;
document.getElementById(user).classList.add("red-glow");
setTimeout(() => {
 document.getElementById(user).classList.remove("red-glow");
}, 500);
}

function tie(user){
//console.log("Tie");
result_div.innerHTML = `Both chose ${convert(user)}. It's a Tie`;
document.getElementById(user).classList.add("gray-glow");
setTimeout(() => {
 document.getElementById(user).classList.remove("gray-glow");
}, 500);
}

function convert(word){
 if(word==='r') return "Rock";
 if(word==='p') return "Paper";
 return "Scissors";
}