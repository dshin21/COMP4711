let main = $("#main")[0];
let submitBtn = $("#submitBtn")[0];
let questionBank = JSON.parse(localStorage.getItem("questionBank"));
let questionData = JSON.parse(localStorage.getItem("questionData"));
let i = 1;
let validationArr = [];

const renderQuestions = () => {
  if (questionBank.length == 0) {
    alert("No questions!");
  } else {
    for (let k = 0; k < questionBank.length; k++) {
      let oneQAset = `<div id='Q${k}'>
      <div>Question Text: </div>
      <textarea readonly  class='textArea' rows="4" cols="50"></textarea><br/>                
      <div>Answers: </div>
      <input type="radio" name='Q${k}' class="radio1"> <input type="text" id="input1" class="input1" name="FirstName${k}"><br/>  
      <input type="radio" name='Q${k}' class="radio2"> <input type="text" id="input2" class="input2" name="FirstName${k}"><br/>  
      <input type="radio" name='Q${k}' class="radio3"> <input type="text" id="input3" class="input3" name="FirstName${k}"><br/>  
      <input type="radio" name='Q${k}' class="radio4"> <input type="text" id="input4" class="input4" name="FirstName${k}"><br/>
      <br/>
      </div>`;
      main.innerHTML += oneQAset;
    }
  }
  downloadValues();
};

const downloadValues = () => {
  for (let k = 0; k < questionBank.length; k++) {
    $(`.textArea`)[k].value = questionData[k].textArea;
    $(`.input1`)[k].value = questionData[k].input1;
    $(`.input2`)[k].value = questionData[k].input2;
    $(`.input3`)[k].value = questionData[k].input3;
    $(`.input4`)[k].value = questionData[k].input4;
  }
};

const validate = () => {
  validationArr = [];
  for (let j = 0; j < $(`.textArea`).length; j++) {
    let userAnswer;
    if ($(`.radio1`)[j].checked) userAnswer = 1;
    if ($(`.radio2`)[j].checked) userAnswer = 2;
    if ($(`.radio3`)[j].checked) userAnswer = 3;
    if ($(`.radio4`)[j].checked) userAnswer = 4;
    validationArr.push(userAnswer);
    validationArr.push(questionData[j].answer);
  }
  let j;
  for (j = 0; j < validationArr.length; j++) {
    if (validationArr[j] == undefined) {
      alert("Please Complete the Quiz!");
      break;
    }
  }
  if (j == validationArr.length) highlightAnswers();
};

const highlightAnswers = () => {
  let k = 0;
  let score = 0;
  for (let j = 0; j <= validationArr.length / 2; j += 2) {
    let userAnswer = validationArr[j];
    let correctAnswer = validationArr[j + 1];
    // console.log(j);
    if ($(`.input${userAnswer}`)[k])
      $(`.input${userAnswer}`)[k].style.backgroundColor = "green";
    if ($(`.input${correctAnswer}`)[k])
      $(`.input${correctAnswer}`)[k].style.backgroundColor = "skyblue";
    if (userAnswer == correctAnswer) score++;
    k++;
  }
  alert(
    `Your Score: ${score}/${validationArr.length / 2} - ${(score /
      (validationArr.length / 2)) *
      100}%`
  );
};
submitBtn.onclick = validate;
renderQuestions();
