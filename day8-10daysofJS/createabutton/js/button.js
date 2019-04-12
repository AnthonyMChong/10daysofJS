// getting reference of the button from the html document
var htmlButton = document.getElementById('htmlNumButton');

var buttonValue = 0;

htmlButton.onclick = function() {
    buttonValue ++;
    htmlButton.innerHTML = buttonValue.toString();
}