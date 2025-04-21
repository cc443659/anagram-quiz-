let questions = [
    "Voices rant on",
    "Here come dots",
    "Swear oft",
    "Im a dot in place",
    "Dog inc"
];
let answers = [
    "Conversation",
    "Morse code",
    "Software",
    "A decimal point",
    "Coding"
];

let i = 1; // index, or count
let userAnswers = [];

function quizStart() {
    document.getElementById("startButton").innerHTML = null;

    document.getElementById("leadP").innerHTML = 'Solve the following anagrams.';
    document.getElementById("extra").innerHTML = 'Use the <span style="font-weight: 700;">Enter</span> key to move on to the next question.';

    getQuestion();
}

function getQuestion() {
    document.getElementById("questions").innerHTML += questions[i - 1];
    document.getElementById("questions").innerHTML += ' <input autocomplete="off" id="answer"/> <br />';
    
    let answerInputElement = document.getElementById("answer");
    answerInputElement.addEventListener("keydown", handleEnterKey);
}

function handleEnterKey(event) {
    if (event.key === "Enter") {
        let inputValue = document.getElementById("answer").value;

        console.log(`${inputValue} : ${i}`) // debugging purposes

        userAnswers.push(inputValue)
        if (i < questions.length) {
            // determines whether quiz is over or not
            document.getElementById("questions").innerHTML = "";
            i += 1;

            getQuestion();
        } else {
            // if quiz is now finished...
            document.getElementById("questions").innerHTML = "Quiz complete.";

            document.getElementById("leadP").innerHTML = null;
            document.getElementById("extra").innerHTML = null;

            calcResultsAnim();
        }
    }
}

function calcResultsAnim() {
    for (let i = 1; i < 4; i++) {
        setTimeout(() => document.getElementById("questions").innerHTML = `Calculating results, please wait${".".repeat(i)}`, (2000 + (i * 500)));
    }
    setTimeout(() => document.getElementById("questions").innerHTML = " ", 4000);
    setTimeout(() => displayResults(), 5500);
    // uses equivalent of the logic in time.sleep() within Python's time module
    //
    // not ideal for bigger animations, in which case CSS should be used whenever possible.
}


function displayResults() {
    // show which answers the user got [in]correct
    let box = document.getElementById("results"); // reduces code redundancy below
    box.style.display = "inline-block";
    box.style.animation = "movein 0.5s linear 1";

    for (let i = 0; i < 5; i++) {
        let userAnswerP = document.getElementById(`userAnswer${i + 1}`);
        userAnswerP.innerHTML = userAnswers[i];
        if (userAnswers[i] == answers[i]) {
            userAnswerP.innerHTML += "<br /><span style='color: green; font-weight: 700;'>Correct</span>";
        } else {
            userAnswerP.innerHTML += "<br /><span style='color: red; font-weight: 700;'>Incorrect</span>";
            userAnswerP.innerHTML += `<br />Correct answer: ${answers[i]}`;
        }
    }
}
