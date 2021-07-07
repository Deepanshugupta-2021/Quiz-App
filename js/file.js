const quizDB = [
    {
  question:  "Q1: Which type of JavaScript language is ___",
  a: "Object-Oriented",
  b: "Object-Based",
  c: "Assembly-language",
  d: "High-level",
  ans:"ans2"
    },
{
    question: "Q2:HTML stands for  ",
  a: "HighText Machine Language",
  b: "HyperText and links Markup Language",
  c: "Assembly-language",
  d: "HyperText Markup Language",
  ans:"ans4"
    },

    {
    question: "Q3:Which character is used to represent the closing of a tag in HTML?",
    a: ";",
    b: "!",
    c: "/",
    d: ",",
    ans:"ans3"
      },

      {
      question:  "Q4: Which of the following tag is used to insert a line-break in HTML?",
      a: "<br>",
      b: "<a>",
      c: "<hr>",
      d: "<b>",
      ans:"ans1"
        },

    {
        question:  "Q5:The property in CSS used to change the background color of an element is ",
      a: "bgcolor",
      b: "color",
      c: "background-color",
      d: "All of the above",
      ans:"ans3"
        },
]

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers =document.querySelectorAll(".answer");
const showScore =document.querySelector("#showScore");


let questionCount = 0;
let score =0;

const loadQuestion = () =>
{
  const questionList = quizDB[questionCount]
 question.innerText  = questionList.question;
 // console.log(quizDB[0].question);
 option1.innerText  = questionList.a;
 option2.innerText  = questionList.b;
 option3.innerText  = questionList.c;
 option4.innerText  = questionList.d;


} 
     loadQuestion();

  const getCheckAnswer = () =>
  {
     let answer;
     answers.forEach((curAnsElem) => {
       if(curAnsElem.checked)
       {
           answer = curAnsElem.id;
       }
       
     });

     return answer;
  }; 

  const deselectAll =() =>
  {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
  }

submit.addEventListener("click",() =>  {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans)
    {
         score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length)
    {
      loadQuestion();
    }
    else
    {
        showScore.innerHTML = `
        <h3>Hii ! You Scored ${score}/${quizDB.length} ✌️✌️ </h3>
        <button class ="btn" onclick = "location.reload()"> Play Again </button>`;

          showScore.classList.remove('scoreArea');
    }
    
});  
