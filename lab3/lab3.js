let main = $("#main")[0];
let addBtn = $("#addBtn")[0];

let questionBank = [];
let i = 0;

addBtn.onclick = () => {
  let oneQAset = `<div id='Q${i}'>
    <div>Question Text: </div>
    <textarea class='qText${i}' rows="4" cols="50"></textarea><br/>                
    <div>Answers: </div>
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>
    <button type="button" id="deleteBtn${i}">Delete</button>  
    </div><br/>`;

  questionBank.push(oneQAset);
  localStorage.setItem("questionBank", JSON.stringify(questionBank));
  reRenderAdd();
  let deleteBtn = document.getElementById(`deleteBtn${i}`);

  deleteBtn.onclick = id => {
    let deleteID = id.srcElement.id;
    let deleteIDNum = deleteBtn.id.substring(deleteID.length - 1);

    questionBank.pop();
    localStorage.setItem("questionBank", JSON.stringify(questionBank));
    reRenderDelete(deleteIDNum);
  };
  i++;
};

const reRenderAdd = () => {
  let temp = JSON.parse(localStorage.getItem("questionBank"));
  if (i == 1) {
    main.innerHTML += temp[0];
  } else {
    for (let j = temp.length - 1; j < temp.length; ++j) {
      main.innerHTML += temp[j];
    }
  }
};

const reRenderDelete = deleteID => {
  let deleteBtn = document.getElementById(`Q${deleteID}`);
  let temp = JSON.parse(localStorage.getItem("questionBank"));
  deleteBtn.remove();
  i--;
};
