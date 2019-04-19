var result = document.getElementById('res');
var resultValue = "beep boop"

function elementAction(e) {
    /*button used for component elements*/
    // result.append(buttontxt)
    /* Older IE browsers have a srcElement property,
    but other browsers have a 'target' property; 
    Set btn to whichever exists. */
    var btn = e.target || e.srcElement;
    
    /* Get the clicked element's innerHTML */
    let currentBtnTxt = document.getElementById(btn.id).innerHTML;
    result.innerHTML = result.innerHTML.concat(currentBtnTxt)
}

function clearAction(e){
    result.innerHTML=""
}

function execAction(e){
    result.innerHTML=resultValue
}


document.getElementById('btn0').addEventListener('click', elementAction);
document.getElementById('btn1').addEventListener('click', elementAction);
document.getElementById('btnSum').addEventListener('click', elementAction);
document.getElementById('btnSub').addEventListener('click', elementAction);
document.getElementById('btnMul').addEventListener('click', elementAction);
document.getElementById('btnDiv').addEventListener('click', elementAction);

document.getElementById('btnClr').addEventListener('click', clearAction);
document.getElementById('btnEql').addEventListener('click', execAction);