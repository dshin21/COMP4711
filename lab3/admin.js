// localStorage.clear();
let main = $("#main");
let addBtn = $("#addBtn")[0];
let saveBtn = $("#saveBtn")[0];
let i = 0;
let questionBank;

const updateLocalStorage = () => {
  localStorage.setItem("questionBank", JSON.stringify(questionBank));
  questionBank = JSON.parse(localStorage.getItem("questionBank"));
};

const retrieveLocalStorage = () => {
  if (JSON.parse(localStorage.getItem("questionBank")) == null) {
    questionBank = [];
  } else {
    questionBank = JSON.parse(localStorage.getItem("questionBank"));
  }
};

const addNewQuestion = () => {
  retrieveLocalStorage();
  let oneQAset = `<div id='Q${i}'>
  <div>Question Text: </div>
  <textarea class='textArea' rows="4" cols="50"></textarea><br/>                
  <div>Answers: </div>
  <input type="radio" name="q${i}"> <input type="text" class="input1" name="FirstName${i}"><br/>  
  <input type="radio" name="q${i}"> <input type="text" class="input2" name="FirstName${i}"><br/>  
  <input type="radio" name="q${i}"> <input type="text" class="input3" name="FirstName${i}"><br/>  
  <input type="radio" name="q${i}"> <input type="text" class="input4" name="FirstName${i}"><br/>
  <button type="button" id="${i}" class="deleteBtn">Delete</button><br/>
  </div>`;
  questionBank.push(oneQAset);
  i++;
  main.append(questionBank[questionBank.length - 1]);
  updateLocalStorage();
  addDeleteBtn();
};

const reRender = () => {
  retrieveLocalStorage();

  i = questionBank.length;

  for (let j = 0; j < i; ++j) {
    main.append(questionBank[j]);
  }

  addDeleteBtn();
  updateLocalStorage();
  downloadValues();
};

const downloadValues = () => {
  retrieveLocalStorage();
  for (let k = 0; k < i; k++) {
    if ($(`.textArea`)[k]) $(`.textArea`)[k].value = questionBank[k].textArea;
    if ($(`.input1`)[k]) $(`.input1`)[k].value = questionBank[k].input1;
    if ($(`.input2`)[k]) $(`.input2`)[k].value = questionBank[k].input2;
    if ($(`.input3`)[k]) $(`.input3`)[k].value = questionBank[k].input3;
    if ($(`.input4`)[k]) $(`.input4`)[k].value = questionBank[k].input4;
  }
  updateLocalStorage();
};

const addDeleteBtn = () => {
  for (let k = 0; k < $(".deleteBtn").length; k++) {
    let deleteBtn = $(".deleteBtn")[k];

    deleteBtn.onclick = () => {
      console.log("deleting id: " + deleteBtn.id);
      $(`#Q${deleteBtn.id}`)[0].remove();
      questionBank.forEach(e => {
        console.log(questionBank);
        questionBank = questionBank.filter(e => {
          return (
            e.charAt(10) == deleteBtn.id || deleteBtn.id == e.substring(10, 12)
          );
        });
        console.log(questionBank);
        updateLocalStorage();
      });
      updateLocalStorage();
    };
  }
};

addBtn.onclick = addNewQuestion;
reRender();
