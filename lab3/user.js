let main = $("#main")[0];
let questionBank = JSON.parse(localStorage.getItem("questionBank"));
let questionData = JSON.parse(localStorage.getItem("questionData"));
let i = 1;

const renderQuestions = () => {
  if (questionBank.length == 0) {
    alert("No questions!");
  } else {
    let oneQAset = `<div id='Q${i}'>
    <div>Question Text: </div>
    <textarea readonly  class='textArea' rows="4" cols="50"></textarea><br/>                
    <div>Answers: </div>
    <input type="radio" name="q${i}"> <input type="text" class="input1" name="FirstName${i}"><br/>  
    <input type="radio" name="q${i}"> <input type="text" class="input2" name="FirstName${i}"><br/>  
    <input type="radio" name="q${i}"> <input type="text" class="input3" name="FirstName${i}"><br/>  
    <input type="radio" name="q${i}"> <input type="text" class="input4" name="FirstName${i}"><br/>
    </div>`;

    for (let k = 0; k < questionBank.length; k++) {
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

renderQuestions();
