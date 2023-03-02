const answer = document.getElementById('display');

const numbers = document.querySelectorAll('.numbers');
const doubleZero = document.getElementById('doubleZero');
const operators = document.querySelectorAll('.operators');

const allClear = document.getElementById('allClear');
const del = document.getElementById('del');
const equal_to = document.getElementById('equal_to');

let text = '';
let count = 1;
let bracketCount = 0;
let solution = 0;

//Numbers
for (let i = 0; i < numbers.length;i++) {
    numbers[i].addEventListener('click', function(e){
        let atr = e.target.getAttribute('value');
        text += atr;
        answer.innerText = text;
        count = 0;
    });
};
doubleZero.addEventListener('click',function(){
    if (count == 0){
        text += '00';
        answer.innerText = text;
    }
});


//Operations
for (let i = 0; i < operators.length;i++) {
    operators[i].addEventListener('click', function(e){
        let sign = e.target.getAttribute('value');
        if (count == 0) {
            text += sign;
            answer.innerText = text;
            count = 1;
        }
    });
};

//Equal To
equal_to.addEventListener('click',function(){
    if (count == 0){
        solution = eval(text);
        answer.innerText = solution;
        text = '';
        count = 1;
        solution = 0;
    }
});

//Delete

del.addEventListener('click',function(){
    if (text.length > 0) {
        text = text.toString().slice(0,-1);
        answer.innerText = text;
        if (text.length == 0) {
            count = 1;
        }
    }
    else {
        answer.innerText = '';
    }
});

//All Clear
allClear.addEventListener('click', function() {
    answer.innerText = '';
    text = '';
    count = 1;
});
