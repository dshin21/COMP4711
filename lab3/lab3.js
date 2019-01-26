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
  main.innerHTML += questionBank[questionBank.length - 1];
};

const reRenderDelete = id => {
  let deleteBtn = document.getElementById(`Q${id}`);
  deleteBtn.remove();
  if (i > 0) i--;
};

saveBtn.onclick = () => {
  //TODO: save form inputs
  alert("Saved!");
};

// localStorage.getItem("questionBank");
