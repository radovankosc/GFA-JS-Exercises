const quizContainer = document.getElementById("main-div");

const scoreDisplay = document.getElementById("score-number");
let score = 0

function updateScoreDisplay(){
    score++;
    scoreDisplay.textContent = score;
}

function fillElements(json){
    const question = document.querySelector("h3");
    question.setAttribute("id", "question");    
    
    const buttons = document.querySelectorAll("button");
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", () => {
            buttons[i].classList.add('selected');
            buttons.forEach((button) => {
                button.setAttribute('disabled', 'true');
              });

              for(let answerObject of json.answers){
    
            setTimeout(()=>{
                if(answerObject.is_correct === 1){
                    updateScoreDisplay();
                    buttons[i].classList.remove("selected");
                    buttons[i].classList.add("correct");
                }else{
                    buttons[i].classList.remove("selected");
                    buttons[i].classList.add("wrong");
                }
              }, 3000);
    
              setTimeout(()=> {
                quizContainer.innerHTML = "";
                loadQuestions();//does not work from this point :(((
                // window.location.href = window.location.href;
                
              },6000);
            }
        });
    }
} 

function loadQuestions(){
    fetch("/api/game/getAnswers") //fetch zamíří na get endpoint /game a vyžádá si res (res jsou data z db)
    .then((res) => res.json()) //convert res to json
    .then((json) => {
        fillElements(json);
    })
    .catch((err) => console.log(err));
}

loadQuestions();





