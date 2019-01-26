let main = $("#main")[0];
let addBtn = $("#addBtn")[0];

let questionBank = [];
let i = 0;

addBtn.onclick = () => {
  i++;
  let oneQAset = `<div id='Q${i}'>
    <div>Question Text: </div>
    <textarea class='qText${i}' rows="4" cols="50"></textarea><br/>                
    <div>Answers: </div>
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>
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
  if (i == 1) {
    main.innerHTML += questionBank[0];
  } else {
    for (let j = questionBank.length - 1; j < questionBank.length; ++j) {
      main.innerHTML += questionBank[j];
    }
  }
};

const reRenderDelete = id => {
  let deleteBtn = document.getElementById(`Q${id}`);
  deleteBtn.remove();
  if (i > 0) i--;
};

// let temp = JSON.parse(localStorage.getItem("questionBank"));
