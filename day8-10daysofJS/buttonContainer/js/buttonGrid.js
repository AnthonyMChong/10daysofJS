var buttonContainer = document.getElementById('btns');
var button5 = document.getElementById('btn5');

var buttonValue = 0;

button5.onclick = function() {
    buttonValue ++;
    button5.innerHTML = buttonValue.toString();
}