const LENGTH = 26;
let alphabet = 65;
let btnArr = [];

const populateArr = () => {
    for (let i = 0; i < LENGTH; ++i) {
        btnArr.push(`<button onclick='onClick(this)'>${String.fromCharCode(alphabet+i)}</button>`);
    }
}

const displayBtn = () => {
    for (let i = 0; i < btnArr.length; ++i) {
        if (i % 13 == 0) document.getElementById('buttons').innerHTML += '<br/>';
        document.getElementById('buttons').innerHTML += btnArr[i];
    }
}

const onClick = (e) => {
    alert(e.innerHTML);
}

populateArr();
displayBtn();