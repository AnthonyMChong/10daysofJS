import * as bM from '/binMath.js';

var result = document.getElementById('res');
var resultValue = "beep boop"

var testParse = ["10","*" , "010" , "+" , "5"]
var operationOrder = ["*","/","+","-"]

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

function parseRes(e){
    result.innerHTML=resultValue
    let parsed = []

}

function stringToEq (eqArray){
    comp1 = parseInt(eqArray[0], 2);
    comp1 = parseInt(eqArray[2], 2);
    switch(eqArray[1]){

    }
}

function executeMath( componentArray ){
    // result.innerHTML=resultValue
    for (op in operationOrder){
        var subOp = componentArray.indexOf(op)
        while (subOp != -1){
            componentArray.splice(subOp -1 , subOp + 1)
            subOp = componentArray.indexOf(op)
        }
    }
    return componentArray
}

function execAction(e){
    // result.innerHTML=resultValue
    result.innerHTML = executeMath (testParse)
}



document.getElementById('btn0').addEventListener('click', elementAction);
document.getElementById('btn1').addEventListener('click', elementAction);
document.getElementById('btnSum').addEventListener('click', elementAction);
document.getElementById('btnSub').addEventListener('click', elementAction);
document.getElementById('btnMul').addEventListener('click', elementAction);
document.getElementById('btnDiv').addEventListener('click', elementAction);

document.getElementById('btnClr').addEventListener('click', clearAction);
document.getElementById('btnEql').addEventListener('click', execAction);