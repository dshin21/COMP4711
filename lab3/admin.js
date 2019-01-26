let main = $("#main")[0];
let addBtn = $("#addBtn")[0];
let saveBtn = $("#saveBtn")[0];
let questionBank = [];
let i = 0;

addBtn.onclick = () => {
  i++;
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
  questionBank.push(oneQAset);
  reRenderAdd();

  for (let k = 0; k < $(".deleteBtn").length; k++) {
    let deleteBtn = $(".deleteBtn")[k];

    deleteBtn.onclick = () => {
      reRenderDelete(deleteBtn.id);
    };
  }
};

const reRenderAdd = () => {
  main.innerHTML += questionBank[questionBank.length - 1];
};

const reRenderDelete = id => {
  let deleteBtn = document.getElementById(`Q${id}`);
  deleteBtn.remove();
  if (i > 0) i--;
};

saveBtn.onclick = () => {
  let tempArr = [];
  for (let k = 0; k < i; ++k) {
    let temp = {
      textArea: $(`#Q${k + 1}`)[k].children[1].value,
      radio1: $(`#Q${k + 1}`)[k].children[4].checked,
      input1: $(`#Q${k + 1}`)[k].children[5].value,
      radio2: $(`#Q${k + 1}`)[k].children[7].checked,
      input2: $(`#Q${k + 1}`)[k].children[8].value,
      radio3: $(`#Q${k + 1}`)[k].children[10].checked,
      input3: $(`#Q${k + 1}`)[k].children[11].value,
      radio4: $(`#Q${k + 1}`)[k].children[13].checked,
      input4: $(`#Q${k + 1}`)[k].children[14].value
    };
    tempArr.push(temp);
  }
  localStorage.setItem("questionBank", JSON.stringify(tempArr));

  // console.log($("#Q1")[0].children[1].value); //text area

  // console.log($("#Q1")[0].children[4].checked); //radio1
  // console.log($("#Q1")[0].children[5].value); //input1

  // console.log($("#Q1")[0].children[7].checked); //radio2
  // console.log($("#Q1")[0].children[8].value); //input2

  // console.log($("#Q1")[0].children[10].checked); //radio3
  // console.log($("#Q1")[0].children[11].value); //input3

  // console.log($("#Q1")[0].children[13].checked); //radio4
  // console.log($("#Q1")[0].children[14].value); //input4

  alert("Saved!");
};

