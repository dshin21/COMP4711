let numberOfQuestion = prompt("Enter number of questions to be displayed");

const set = [
  {
    question: '1)<font color="blue">this </font>in method refers?',
    answers: [
      "a)owner object.",
      "b)global object",
      "c)element",
      "d)any object."
    ]
  },
  {
    question: '2)Along <font color="blue">this</font> refers?',
    answers: [
      "a)owner object.",
      "b)global object",
      "c)element",
      "d)any object."
    ]
  },
  {
    question: '3)In function, <font color="blue">this</font> refers?',
    answers: [
      "a)owner object.",
      "b)global object",
      "c)element",
      "d)any object."
    ]
  },
  {
    question: '4)In an event, <font color="blue">this</font> refers ?',
    answers: [
      "a)owner object.",
      "b)global object",
      "c)element",
      "d)any object."
    ]
  },
  {
    question: "5)this in function in strict mode",
    answers: ["a)owner object.", "b)global object", "c)element", "d)undefined."]
  },
  {
    question:
      '6)Where will <font color="blue">serAttribute</font> set attribute?',
    answers: ["a)inline.", "b)external", "c)separate", "d)none of above."]
  },
  {
    question:
      '7)what is the <font color="blue">difference</font> of addEventListener and onclick function?',
    answers: [
      "a)addEventListener faster",
      "b)addEventListener can use with multiple function",
      "c)onclick can use with multiple function",
      "d)onclick is faster"
    ]
  },
  {
    question:
      '8)what is <font color="blue">querySelectorAll</font> return type?',
    answers: ["a)one node", "b)array of node", "c)undefined", "d)string"]
  },
  {
    question: '9)what will <font color="blue">break</font> do?',
    answers: [
      "a)terminate current loop",
      "b)terminate current iteration",
      "c)exit program",
      "d)close browser."
    ]
  },
  {
    question: '10)what will <font color="blue">continue</font> do?',
    answers: [
      "a)terminate current loop",
      "b)terminate current iteration",
      "c)exit program",
      "d)close browser."
    ]
  }
];
const answersKeys = [0, 1, 1, 2, 1, 0, 0, 1, 1, 0, 1];

function display() {
  for (let i = 0; i < numberOfQuestion; i++) {
    let doc = document.getElementById("questionSet");
    doc.innerHTML += "<br>" + set[i].question + "<br>";
    for (let ia = 0; ia < 4; ia++) {
      doc.innerHTML +=
        '<input type="radio" name="q' +
        i +
        '" value="' +
        ia +
        '">' +
        set[i].answers[ia] +
        "<br>";
    }
  }
}
display();
