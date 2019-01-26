let main = $("#main")[0];
var questionBank = JSON.parse(localStorage.getItem("questionBank"));
let i = 1;

const renderQuestions = () => {
  if (questionBank.length == 0) {
    alert("No questions!");
  } else {
    let oneQAset = `<div id='Q${i}'>
    <div>Question Text: </div>
    <textarea class='qText${i}' rows="4" cols="50"></textarea><br/>                
    <div>Answers: </div>
    <input type="radio" name="q${i}"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="q${i}"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="q${i}"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="q${i}"> <input type="text" name="FirstName${i}"><br/>
    <button type="button" id="${i}" class="deleteBtn">Delete</button><br/>
    </div>`;

    for (let k = 0; k < questionBank.length; k++) {
      main.innerHTML += oneQAset;
    }
  }
};

renderQuestions();
