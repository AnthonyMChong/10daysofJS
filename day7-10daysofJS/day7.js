var vowels = ["a", "e", "i", "o","u"]

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
   var re = /^([a,e,i,o,u]).+\1$/

    /*
     * Do not remove the return statement
     */
    return re;
}


const re = regexVar();
const s = "aaadsfaaa"
const s2 = "eaadsfaaaa"
const s3 = "uaadsfaaa"
const s4 = "sfytfe"
const s5 = "esfytfe"

console.log(re.test(s));
console.log(re.test(s2));
console.log(re.test(s3));
console.log(re.test(s4));
console.log(re.test(s5));