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
  <input type="radio" name='Q${i}' class="radio1"> <input type="text" class="input1" name="FirstName${i}"><br/>  
  <input type="radio" name='Q${i}' class="radio2"> <input type="text" class="input2" name="FirstName${i}"><br/>  
  <input type="radio" name='Q${i}' class="radio3"> <input type="text" class="input3" name="FirstName${i}"><br/>  
  <input type="radio" name='Q${i}' class="radio4"> <input type="text" class="input4" name="FirstName${i}"><br/>
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
  let questionData = JSON.parse(localStorage.getItem("questionData"));
  for (let k = 0; k < questionBank.length; k++) {
    $(`.textArea`)[k].value = questionData[k].textArea;
    $(`.input1`)[k].value = questionData[k].input1;
    $(`.input2`)[k].value = questionData[k].input2;
    $(`.input3`)[k].value = questionData[k].input3;
    $(`.input4`)[k].value = questionData[k].input4;
    $(`.radio${questionData[0].answer}`)[k].checked = true;
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

const save = () => {
  let arr = [];
  for (let j = 0; j < $(`.textArea`).length; ++j) {
    let answer;
    if ($(`.radio1`)[j].checked) answer = 1;
    if ($(`.radio2`)[j].checked) answer = 2;
    if ($(`.radio3`)[j].checked) answer = 3;
    if ($(`.radio4`)[j].checked) answer = 4;
    let temp = {
      textArea: $(`.textArea`)[j].value,
      input1: $(`.input1`)[j].value,
      input2: $(`.input2`)[j].value,
      input3: $(`.input3`)[j].value,
      input4: $(`.input4`)[j].value,
      answer: answer
    };
    arr.push(temp);
  }
  localStorage.setItem("questionData", JSON.stringify(arr));
};

saveBtn.onclick = save;
addBtn.onclick = addNewQuestion;
reRender();
