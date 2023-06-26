const manageQuestions = document.getElementById("manage-questions");
const createQuestion = document.getElementById("create-question");

const submitButton = document.getElementById("submit");
const form = document.getElementById("question-form");

function renderQuestions(jsonResult) {
  for (let i = 0; i < jsonResult.length; i++) {
    const divQuest = document.createElement("div");
    divQuest.classList.add("div-quest");

    const divQuestion = document.createElement("div");
    divQuestion.classList.add("div-question");

    const quest = document.createElement("h3");
    quest.innerText = jsonResult[i].question;
    divQuestion.appendChild(quest);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleted-button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => {
      fetch(`/api/questions/${jsonResult[i].id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          //response.ok = response === 200;
          manageQuestions.removeChild(divQuest);
          manageQuestions.removeChild(line);
        }
      });
    });

    divQuest.appendChild(divQuestion);
    divQuest.appendChild(deleteButton);

    const line = document.createElement("hr");

    manageQuestions.appendChild(divQuest);
    manageQuestions.appendChild(line);
  }
}

function loadListOfQuestions() {
  fetch("/api/questions")//method GET
    .then((res) => res.json()) //promise
    
    .then((json) => {
      console.log(json)
      renderQuestions(json);
    })
    .catch((err) => console.log(err));
}

function deleteQuestion(id) {
  console.log("delete");
  fetch(`/api/questions/${post.id}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      //response.ok = response === 200;
      postsDiv.removeChild(newPostDiv);
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendToBackend();
  form.reset();
  loadListOfQuestions();
});

function sendToBackend() {
  const question = document.getElementById("question").value;

  const radios = document.querySelectorAll(".input-radio");
  const rawAnswers = document.querySelectorAll(".answer");//array

  //----at least 2 answers accept-------
  const answers = [];
  for (let i = 0; i < rawAnswers.length; i++) {
    if (rawAnswers[i].value === "" && radios[i].checked) {
      alert(
        "Right answer must be one of these provided answers, try to add some question with at least two answers again :)"
      );      
    }

    if (rawAnswers[i].value !== "") {
      answers.push(rawAnswers[i]);
    }
  }

  const arrOfRadioAnswers = []; //0,1,0,0
  for (let i = 0; i < answers.length; i++) {
    if (radios[i].checked) {
      arrOfRadioAnswers.push("1");
    }
    arrOfRadioAnswers.push("0");
  }

  const fetchingAnswers = [];
  for (let i = 0; i < answers.length; i++) {
    fetchingAnswers.push({
      answer: answers[i].value,
      is_correct: arrOfRadioAnswers[i],
    });
  }

  fetch("/api/questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: `${question}`, answers : fetchingAnswers }), //cannot be in `${question}`, because it sends it as string :D
    redirect: "manual",
  })
    .then((response) => {
      if (response.ok) {
        //response.ok = response === 200;
        console.log("Question and answers inserted to database!");
      }
    })

    .catch((err) => console.log(err));
}

loadListOfQuestions();
