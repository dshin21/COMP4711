let main = $("#main")[0];
let addBtn = $("#addBtn")[0];

sessionStorage.questionBank = [1];

let i = sessionStorage.questionBank;

addBtn.onclick = () => {
  let oneQAset = `<div id='Q${i}'>
    <div>Question Text: </div>
    <textarea class='qText${i}' rows="4" cols="50"></textarea><br/>                
    <div>Answers: </div>
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>  
    <input type="radio" name="gender${i}" value="male"> <input type="text" name="FirstName${i}"><br/>
    <button type="button" id="deleteBtn">Delete</button>  
    </div><br/>`;

  sessionStorage.questionBank.push(oneQAset);
  reRender();

  let deleteBtn = $("#deleteBtn")[0];
  deleteBtn.onclick = () => {
    sessionStorage.questionBank.pop();
    reRender();
  };
};

const reRender = () => {
  for (let i = 0; i < sessionStorage.questionBank.length; ++i) {
    main.innerHTML += sessionStorage.questionBank[i];
  }
};
