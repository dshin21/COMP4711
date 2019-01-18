const data = {
    q1: {
        question: "1) Where is the correct tag to place when adding an external JavaScript file?",
        answers: [
            " a) head",
            " b) body",
            " c) html",
            " d) under body"
        ]
    },
    q2: {
        question: "<br/>2) Which of these functions does not belong to an array?",
        answers: [
            "a) shift()",
            "b) flip()",
            "c) reverse()",
            "d) pop()"
        ]
    },
    q3: {
        question: `<br/> 3) What is the result of the following code? <br><br>
        <span >var</span> arr : ["a","b","c"]; <br>
        <span class="red">var</span> newArr : arr.splice(0,1); <br>
        <span class="blue">console</span>.log(newArr);`,
        answers: [
            "a) [\"a\"]",
            "b) [\"b\"]",
            "c) [\"c\"]",
            "d) [\"a\",\"b\"]"
        ]
    },
    q4: {
        question: `<br/>4) What is the result of the following code? <br><br>
        <span class="red">function</span> foo() {<br>
        &nbsp;&nbsp;<span class="blue">console</span>.log(a);<br>
        }<br>
        <span class="red">var</span> a : 10;`,
        answers: [
            "a) 10",
            "b) null",
            "c) undefined",
            "d) 0"
        ]
    },
    q5: {
        question: `<br/>5) What is the result of the following code? <br><br>
        <span class="red">const</span> TEMP : 10;<br>
        TEMP : 11;<br>
        <span class="blue">console</span>.log(TEMP);<br>`,
        answers: [
            "a) 11",
            "b) 10",
            "c) null",
            "d) error"
        ]
    }
}

const inputQTemplate = () => {
    for (let i = 1; i <= 5; ++i) {
        document.getElementById('temp').innerHTML += `<div class="col-sm-11 offset-sm-1">
    <p id="q${i}"></p>
    <div>
        <span id="q${i}a"><input  type="radio" name="q${i}"></span><br>
        <span id="q${i}c"><input  type="radio" name="q${i}"></span><br>
        <span id="q${i}b"><input  type="radio" name="q${i}"></span> <br>
        <span id="q${i}d"><input  type="radio" name="q${i}"></span> 
    </div>
    </div>`
    }
}

const insertQ = (data) => {
    document.getElementById(`q${1}`).innerHTML = data.q1.question;
    document.getElementById(`q${2}`).innerHTML = data.q2.question;
    document.getElementById(`q${3}`).innerHTML = data.q3.question;
    document.getElementById(`q${4}`).innerHTML = data.q4.question;
    document.getElementById(`q${5}`).innerHTML = data.q5.question;
}

const insertA = (data) => {
    let alphabet = 97;
    for (let i = 0; i < 4; ++i) {
        document.getElementById(`q1${String.fromCharCode(alphabet + i)}`).innerHTML += data.q1.answers[i];
        document.getElementById(`q2${String.fromCharCode(alphabet + i)}`).innerHTML += data.q2.answers[i];
        document.getElementById(`q3${String.fromCharCode(alphabet + i)}`).innerHTML += data.q3.answers[i];
        document.getElementById(`q4${String.fromCharCode(alphabet + i)}`).innerHTML += data.q4.answers[i];
        document.getElementById(`q5${String.fromCharCode(alphabet + i)}`).innerHTML += data.q5.answers[i];
    }
}


inputQTemplate();
insertQ(data);
insertA(data);

