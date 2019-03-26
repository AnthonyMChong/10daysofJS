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


// console.log(vowelsAndConsonants("javascriptloops"));
vowelsAndConsonants("javascriptloops")