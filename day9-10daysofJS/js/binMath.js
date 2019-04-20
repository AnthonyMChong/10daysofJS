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
        return;
    }
}

testeq = ["1101" , "+" , "0001"]
console.log(stringToEq(testeq))