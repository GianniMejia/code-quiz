//variables
var initials;
var timerCountdown;
var secondsLeft = 60;
var score = 0;
var wrongAnswer =3
//DIV elements on the page 
var quizQuestionEl= document.querySelector("#quizQuestion");
var startScreenEl= document.querySelector("#quiz");
var scoreEntryEl= document.querySelector("#scoreEntry");
//Buttons on the page 
var quizChoicesEl = document.querySelector(".quizChoices"); 
var startButtonEl = document.getElementById("startBtn");
var submitButtonEl = document.getElementById("scoreBtn");


//*********** FUNCTIONS  */
function startQuiz(){
    alert("Game begins"); 
    //Hide the startscreen 
    startScreenEl.style.display = "none"; 
    //Un-hide the question and choice DIV
quizQuestionEl.style.display = "block";

}
//*********** FUNCTIONS  */

//Event Listener 
startButtonEl.addEventListener('click', startQuiz); 
