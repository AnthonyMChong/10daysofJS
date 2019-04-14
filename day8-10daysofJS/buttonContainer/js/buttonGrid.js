var buttonContainer = document.getElementById('btns');
var button5 = document.getElementById('btn5');
var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button4 = document.getElementById('btn4');
var button6 = document.getElementById('btn6');
var button7 = document.getElementById('btn7');
var button8 = document.getElementById('btn8');
var button9 = document.getElementById('btn9');

var buttonValue = 0;
// var rotOrder = [ "1","2","3","6","9","8","7","4" ]
var rotOrder = [ "4","7","8","9","6","3","2","1" ]


button5.onclick = function() {
    buttonValue = (buttonValue+1) % 8;
    // button5.innerHTML = buttonValue.toString();
    button1.innerHTML = rotOrder [(7 + buttonValue)%8 ]
    button2.innerHTML = rotOrder [(6 + buttonValue)%8 ]
    button3.innerHTML = rotOrder [(5 + buttonValue)%8 ]
    button6.innerHTML = rotOrder [(4 + buttonValue)%8 ]
    button9.innerHTML = rotOrder [(3 + buttonValue)%8 ]
    button8.innerHTML = rotOrder [(2 + buttonValue)%8 ]
    button7.innerHTML = rotOrder [(1 + buttonValue)%8 ]
    button4.innerHTML = rotOrder [(0 + buttonValue)%8 ]
}