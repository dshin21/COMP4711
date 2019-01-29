localStorage.clear();
let main = $("#main");
let addBtn = $("#addBtn")[0];
let saveBtn = $("#saveBtn")[0];
let i = 0;
let questionBank = [];

const updateLocalStorage = () => {
  localStorage.setItem("questionBank", JSON.stringify(questionBank));
  questionBank = JSON.parse(localStorage.getItem("questionBank"));
  // i = questionBank.length;
};

const retrieveLocalStorage = () => {
  if (JSON.parse(localStorage.getItem("questionBank")) == null) {
    questionBank = [];
  } else {
    questionBank = JSON.parse(localStorage.getItem("questionBank"));
  }
  // i = questionBank.length;
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
  updateLocalStorage();
  reRender();
  addDeleteBtn();
};

const reRender = () => {
  retrieveLocalStorage();

  main.append(questionBank[questionBank.length - 1]);
  updateLocalStorage();
  downloadValues();
};

const downloadValues = () => {
  retrieveLocalStorage();
  for (let k = 0; k < i; k++) {
    // console.log("downloading: " + k);
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
      questionBank.forEach(e => {
        let temp = e.substring(10, 12);
        if (deleteBtn.id === temp.charAt(0) || deleteBtn.id === e.substring(10,12)) {
          console.log("deleting id: " + deleteBtn.id);
          console.log(questionBank);
          questionBank.filter((value, index, arr) => {
            console.log(e.charAt(10));
          });
          $(`#Q${deleteBtn.id}`)[0].remove();
          updateLocalStorage();
        }
      });
      updateLocalStorage();
    };
  }
};

addBtn.onclick = addNewQuestion;
// create 2 functions, update localstorage & retrieve local storage
// use all values from the localstorage

// TODO: same Q class names -> delete id by iterating
