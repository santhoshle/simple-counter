let addButton = document.getElementById('add');
let subButton = document.getElementById('subtract');
let resetButton = document.getElementById('reset');
let inputInc = document.getElementById('increment');
let spanNum = document.getElementById('number');

const counter = (isIncrement = false) => {
    let current = spanNum.innerText;
    let counter = inputInc.value;
    if(isIncrement)
    {
        spanNum.innerText = Number(current) + Number(counter);
    }
    else
    {
        spanNum.innerText = Number(current) - Number(counter);
    }
}

resetButton.addEventListener('click', () => spanNum.innerText = 0 );
addButton.addEventListener('click', () => counter(true));
subButton.addEventListener('click', () => counter());