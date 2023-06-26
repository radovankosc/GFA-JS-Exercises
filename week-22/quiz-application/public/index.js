const quizContainer = document.getElementById("main-div");

const scoreDisplay = document.getElementById("score-number");
let score = 0

function updateScoreDisplay(){
    score++;
    scoreDisplay.textContent = score;
}

function createElements(jsonResult){
    
    const question = document.createElement("h3");
    question.setAttribute("id", "question");
    question.textContent = jsonResult.questions; //json.qestion (json is rensponse from BE with property question)
    quizContainer.appendChild(question);

    for(let answerObject of jsonResult.answers){
        const answerButton = document.createElement("button");
        answerButton.classList.add("option");
        answerButton.textContent = answerObject.answer;

        answerButton.addEventListener("click", () => {
            answerButton.classList.add('selected');
//if any is selected, the rest of buttons must be disabled
            document.querySelectorAll('button').forEach((button) => {
                button.setAttribute('disabled', 'true');
              });

              setTimeout(()=>{
                if(answerObject.is_correct === 1){
                    updateScoreDisplay();
                    answerButton.classList.remove("selected");
                    answerButton.classList.add("correct");
                }else{
                    answerButton.classList.remove("selected");
                    answerButton.classList.add("wrong");
                }
              }, 3000);

              setTimeout(()=> {
                quizContainer.innerHTML = "";
                loadQuestions();
              },6000);
        });

        quizContainer.appendChild(answerButton);
    }
}

function loadQuestions(){
    fetch("/api/game") //fetch zamíří na get endpoint /game a vyžádá si res (res jsou data z db)
    .then((res) => res.json()) //convert res to json
    .then((json) => {
        createElements(json);
    })
    .catch((err) => console.log(err));
}

loadQuestions();





