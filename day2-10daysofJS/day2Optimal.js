function vowelsAndConsonants(s) {
    let vowels = "";
    let constinents = "";
    // console.log(s)
    for (let letter in s){//in javascript strings are iterable
        let currentletter = s.charAt(letter);
        if ( /[aeiouAEIOU]/.test(currentletter)){
            vowels = vowels.concat(currentletter);
        }
        else{
            constinents = constinents.concat(currentletter);
        }
    } 

    var ordereds = vowels.concat(constinents);
    // for (orderindex = 0; orderindex < ordereds.length ; orderindex++){
    //     console.log(ordereds.charAt(orderindex));
    // }
    for (let o in ordereds){
        console.log(ordereds.charAt(o))
    }

}

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25) {
        grade = "A";
    }
    else if (score > 20) {
        grade = "B";
    }
    else if (score > 15) {
        grade = "C"
    }
    else if (score > 10) {
        grade = "D"
    }
    else if (score > 5) {
        grade = "E"
    }
    else {
        grade = "F"
    }
    return grade;
}

function getLetter(s) {
    var letter;
    var firstletter = s.charAt(0)
    console.log(firstletter)
    switch (true) {
        case /[aeiou]/.test(firstletter):
            letter = "A";
            break;
        case /[bcdfg]/.test(firstletter):
            letter = "B";
            break;
        case /[hjklm]/.test(firstletter):
            letter = "C";
            break;
        case /[npqrstvwxyz]/.test(firstletter):
            letter = "D"
            break;
        default:    
            console.log(/[aeiou]/.test(firstletter))
            letter = "ERROR"
            break;
    }

    
    return letter;
}

// console.log(vowelsAndConsonants("javascriptloops"));
// vowelsAndConsonants("javascriptloops")



console.log(getLetter("adfgt"));
// console.log(getGrade(7));