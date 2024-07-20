        let questions = ["Voices Rant On", "Here come dots", "Swear oft", "Im a dot in place", "Dog inc"];
        let answers = ["Conversation", "Morse code", "Software", "A decimal point", "Coding"];

        let count = 0;

        function quizStart() {
            document.getElementById("leadP").innerHTML = 'Solve the following anagrams.';
            document.getElementById("extra").innerHTML = 'Use the <span style="font-weight: 700;">Enter</span> key to move on to the next question.';
        }

        function getQuestion() {
            let answerInputElement_old = document.getElementById("answer");
            if (answerInputElement_old) {
                answerInputElement_old.removeEventListener("keydown", handleEnterKey);
            }
            
            document.getElementById("questions").innerHTML += questions[count];
            document.getElementById("questions").innerHTML += ' <input autocomplete="off" id="answer"/> <br />';
            
            let answerInputElement = document.getElementById("answer");
            answerInputElement.addEventListener("keydown", handleEnterKey);
        }
        
        function handleEnterKey(event) {
        if (event.key === "Enter") {
            if (count < 4) {            
                let inputValue = document.getElementById("answer").value;
                console.log(inputValue[count]);
                count += 1;
                
                document.getElementById("questions").innerHTML = "";
                
                getQuestion();
            } else {
                document.getElementById("questions").innerHTML = "Quiz complete.";
                setTimeout(() => console.log("Quiz complete."), 1800);

                document.getElementById("leadP").innerHTML = null;
                document.getElementById("extra").innerHTML = null;
                
                calcResultsAnim();
            }
        }

    }

    function calcResultsAnim() {
        setTimeout(() => document.getElementById("questions").innerHTML = "Calculating results, please wait...", 2000);
        setTimeout(() => document.getElementById("questions").innerHTML = "Calculating results, please wait.", 2500);
        setTimeout(() => document.getElementById("questions").innerHTML = "Calculating results, please wait..", 3000);
        setTimeout(() => document.getElementById("questions").innerHTML = "Calculating results, please wait...", 3500);
        setTimeout(() => document.getElementById("questions").innerHTML = "", 4000);
        setTimeout(() => displayResults(), 5500);
    }

    function buttonHide() {
        document.getElementById("startButton").innerHTML = null;
    }

    let box = document.getElementById("results");
    
    function displayResults() {
            box.style.display = "inline-block";
            box.style.animation = "movein 0.5s linear 1";
            
            let userAnswer1 = inputValue[1];
            document.getElementById("userAnswer1").innerHTML = userAnswer1.value;
    }
