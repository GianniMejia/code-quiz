//variables
var initials;
var timerCountdown = 100;

var score = 0;
var wrongAnswer = 3
//DIV elements on the page 
var quizQuestionEl = document.querySelector("#quizQuestion");
var startScreenEl = document.querySelector("#quiz");
var scoreEntryEl = document.querySelector("#scoreEntry");
var timerEl = document.getElementById("timer");
//Buttons on the page 
var quizChoicesEl = document.querySelectorAll(".quizChoices");
var startButtonEl = document.getElementById("startBtn");
var submitButtonEl = document.getElementById("scoreBtn");
//Current question Index 
var index = 0;
var timeInterval;
var quizQuestionList = [
    {
        question: "What is a holeshot when talking about riding dirt bikes?",
        choices: ["A rider who pushes another ride into a rut.", "A rider that falls into a hole.", "A rider with the strongest start.", "A rider that is last to leave starting line."],
        answer: "A rider with the strongest start."
    },
    {
        question: "What does LCQ stand for when racing?",
        choices: ["Last chance qualifier.", "Left career quickly.", "Lowest chance qualifying.", "Love Comes Quickly"],
        answer: "Last chance qualifier."
    }, {
        question: "The most popular dirt bikes are manufactured from what country?",
        choices: ["Australia", "Britain", "United States", "Japan"],
        answer: "Japan"
    }, {
        question: "Who is considered the GOAT of motocross racing?",
        choices: ["Travis Pastrana", "Ricky Carmicheal", "Buttery", "Twitch"],
        answer: "Ricky Carmicheal"
    }, {
        question: "Most of the time a rider will panic rev when?",
        choices: ["Going through the whoops.", "While airborne.", "At the starting gate.", "In a turn."],
        answer: "While airborne."
    },
]

//previous score List 
var previousScoreSubmissions = JSON.parse(localStorage.getItem("scoreSubmissions"));
console.log(previousScoreSubmissions);
if (previousScoreSubmissions === null) {

    previousScoreSubmissions = [];

}
console.log(previousScoreSubmissions);

//*********** FUNCTIONS  */
function startQuiz() {
    alert("Game begins");
    //Hide the startscreen 
    startScreenEl.style.display = "none";
    //Un-hide the question and choice DIV
    quizQuestionEl.style.display = "block";

    //start the clock function 
    countdown();

    //call the display function 
    displayQandChoices();
}

function displayQandChoices() {
    // console.log("Whole Question", quizQuestionList[index]);
    // console.log(quizQuestionList[index].question);
    //Show the question on the HTML element 
    document.getElementById("question").textContent = quizQuestionList[index].question;
    //loop through all the choices for the current question 
    // console.log("HTML Element", quizChoicesEl)
    // console.log("Choices", quizQuestionList[index].choices);
    for (var i = 0; i < quizChoicesEl.length; i++) {
        //show the text on the choice buttons 
        quizChoicesEl[i].textContent = quizQuestionList[index].choices[i];
        //add an event listener 
        quizChoicesEl[i].addEventListener('click', correctAns);
    }

}

function correctAns() {
    var buttonClicked = this.textContent;
    var rightAnswer = quizQuestionList[index].answer;

    //compare the answers 
    if (buttonClicked === rightAnswer) {
        alert("Right answer")
    } else {
        timerCountdown = timerCountdown - wrongAnswer;
        alert("Wrong answer");
        //update the time display 
        timerEl.textContent = timerCountdown + "seconds left";
    }
    //move to the next question 
    index = index + 1;
    // console.log("No.of q", quizQuestionList.length, "Current Q No: ", index);
    //run out of question then gameover 
    if (quizQuestionList.length === index) {
        alert("Game over");
        endQuiz();
    } else {
        // else you move to the next questoin
        displayQandChoices();
    }

}
function endQuiz() {
    clearInterval(timeInterval); //stops the clock 
    //Hide the quizQuestion DV 
    quizQuestionEl.style.display = "none";

    //un-hide the scoreEntry DIV 
    scoreEntryEl.style.display = "block";
}
function savePlayerScore() {
    //save the initials and time left by the player in localstorage 
    var username = document.getElementById("userInitials").value;
    console.log(username, timerCountdown);
    var playerScore = {
        name: username,
        score: timerCountdown
    }
    //add the new scores to the previous list 
    previousScoreSubmissions.push(playerScore)

    localStorage.setItem("scoreSubmissions", JSON.stringify(previousScoreSubmissions));

    //take to highscore page 
    window.location.href = "high-scores.html";


}


function countdown() {

    // TODO: Add a comment describing the functionality of the setInterval() method:
    timeInterval = setInterval(function () {
        // TODO: Add comments describing the functionality of the `if` statement:
        if (timerCountdown > 1) {
            timerEl.textContent = timerCountdown + ' seconds remaining';
            timerCountdown--;
        } // TODO: Add comments describing the functionality of the `else if` statement:
        else if (timerCountdown === 1) {
            timerEl.textContent = timerCountdown + ' second remaining';
            timerCountdown--;
        } // TODO: Add comments describing the functionality of the `else` statement:
        else {
            timerEl.textContent = '';
            // clearInterval(timeInterval); //stops the clock 
            endQuiz()
        }
    }, 1000);
}

//*********** FUNCTIONS  */

//Event Listener 
startButtonEl.addEventListener('click', startQuiz);
submitButtonEl.addEventListener('click', savePlayerScore);
