function vowelsAndConsonants(s) {
    var vowels = "";
    var constinents = "";
    // console.log(s)
    for (var sindex = 0 ; sindex < s.length ; sindex++){
        var l = s.charAt(sindex);
        if (l =="a" || l =="e" || l =="i" || l =="o" || l =="u"||l =="A" || l =="E" || l =="I" || l =="O" || l =="U"){
            if (vowels){
                vowels = vowels.concat(l);
            }
            else{
                vowels = l;
            }
        }
        else{
            if (constinents){
                constinents = constinents.concat(l);
            }
            else{
                constinents = l;
            }
        }
    }
    var ordereds = vowels.concat(constinents);
    for (var o = 0 ; o < ordereds.length; o++){
        console.log(ordereds.charAt(o))
    }
    // console.log(ordereds)
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
    let letter;
    let firstletter = s.charAt(0)
    // Write your code here
    switch (firstletter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C";
            break;
        default:
            letter = "D"
            break;
    }

    
    return letter;
}

// console.log(vowelsAndConsonants("javascriptloops"));
vowelsAndConsonants("javascriptloops")
console.log(getGrade(7));