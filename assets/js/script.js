//variables
var initials;
var timerCountdown = 100;

var score = 0;
var wrongAnswer = 3
//DIV elements on the page 
var quizQuestionEl = document.querySelector("#quizQuestion");
var startScreenEl = document.querySelector("#quiz");
var scoreEntryEl = document.querySelector("#scoreEntry");
//Buttons on the page 
var quizChoicesEl = document.querySelectorAll(".quizChoices");
var startButtonEl = document.getElementById("startBtn");
var submitButtonEl = document.getElementById("scoreBtn");
//Current question Index 
var index =0; 

var quizQuestionList = [
    {
        question: "Question 1",
        choices: ["A", "B", "C", "D"],
        answer: "C"
    },
    {
        question: "Question 2",
        choices: ["AA", "BA", "CA", "DA"],
        answer: "AA"
    }, {
        question: "Question 3",
        choices: ["DA", "DB", "DC", "DD"],
        answer: "DC"
    },
]

//*********** FUNCTIONS  */
function startQuiz() {
    alert("Game begins");
    //Hide the startscreen 
    startScreenEl.style.display = "none";
    //Un-hide the question and choice DIV
    quizQuestionEl.style.display = "block";

    //start the clock function 

    //call the display function 
    displayQandChoices();
}

function displayQandChoices() {
    console.log("Whole Question", quizQuestionList[index]);
    console.log(quizQuestionList[index].question);
    //Show the question on the HTML element 
    document.getElementById("question").textContent = quizQuestionList[index].question;
    //loop through all the choices for the current question 
    console.log("HTML Element", quizChoicesEl)
    console.log("Choices", quizQuestionList[index].choices);
    for (var i = 0; i < quizChoicesEl.length; i++) {
        //show the text on the choice buttons 
        quizChoicesEl[i].textContent = quizQuestionList[index].choices[i];
        //add an event listener 
        quizChoicesEl[i].addEventListener('click', correctAns);
    }

}

function correctAns() {
    var buttonClicked = this.textContent;
    console.log(buttonClicked);
    var rightAnswer = quizQuestionList[index].answer;
    console.log(rightAnswer);

    //compare the answers 
    if (buttonClicked === rightAnswer) {
        alert("Right answer")
    } else {
        timerCountdown = timerCountdown - wrongAnswer;
        alert("Wrong answer");
        //update the time display 
        document.getElementById("timer").textContent = timerCountdown + "seconds left";
    }
    //move to the next question 
    index = index  + 1; 
    displayQandChoices();
}
//*********** FUNCTIONS  */

//Event Listener 
startButtonEl.addEventListener('click', startQuiz); 
