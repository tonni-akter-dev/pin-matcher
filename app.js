function getPin(params) {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calculate = document.getElementById('typed-numbers');

if (isNaN(number)) {
  if (number == 'C') {
    calculate.value = '';
     }
}
else {
    const previousNumber = calculate.value;
    const newCalc = previousNumber + number;
    calculate.value = newCalc;
}
});

function veryfyPin() {
    // console.log(;goint to');
    const pinNum = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failnotification = document.getElementById('notify-fail');

    if (pinNum == typedNumbers) {
        successMessage.style.display = 'block';
        failnotification.style.display = 'none'; 
    }
    else {
        failnotification.style.display = 'block';
        successMessage.style.display = 'none';

    }
}