var testParse = "10*010+101-101/101"

function stringToEq (eqArray){
    let comp1 = parseInt(eqArray[0], 2);
    let comp2 = parseInt(eqArray[2], 2);
    switch(eqArray[1]){
        case "+":
            return comp1 + comp2;
        case "-":
            return comp1 - comp2;
        case "*":
            return comp1 * comp2;
        case "/":
            return comp1 / comp2;
        default:
            return 0
    }
}

function intToBin (binInt){
    return binInt.toString(2)
}

function getEquationInts(equation){
    return equation.split(/[\*\/\+\-]/)
}

// testeq = ["1101" , "+" , "0001"]
// console.log(stringToEq(testeq))
// console.log(intToBin(stringToEq(testeq)))
// testeq = ["1101" , "-" , "0001"]
// console.log(stringToEq(testeq))
// console.log(intToBin(stringToEq(testeq)))
// testeq = ["1101" , "/" , "0010"]
// console.log(stringToEq(testeq))
// console.log(intToBin(stringToEq(testeq)))
// testeq = ["1101" , "*" , "0011"]
// console.log(stringToEq(testeq))
// console.log(intToBin(stringToEq(testeq)))

componentArray = ["1", "2" , "3"]
testeq = componentArray.splice(0 , 1)

console.log(getEquationInts(testParse))