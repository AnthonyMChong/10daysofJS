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


function regexTitle() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  
 var re = /^(Dr|Mr|Mrs|Ms|Er)\.[a-zA-Z]+$/

  /*
   * Do not remove the return statement
   */
  return re;
}

function regexNum() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  
  var re = /([1-9]+)+/
  /*
   * Do not remove the return statement
   */
  return re;
}

const titlere = regexTitle();
const numberstringre = regexNum();
// const re = regexVar();
// const s = "aaadsfaaa"
// const s2 = "eaadsfaaaa"
// const s3 = "uaadsfaaa"
// const s4 = "sfytfe"
// const s5 = "esfytfe"
// const title = "Mranthony"
// const title1 = "Ms.Chong"
// const title2 = "Mrs.Allison"
// const title3 = "M.Bison"
// const title4 = "Bison"
// const title5 = "DooDoo"
// const title6 = "rude"
// const title7 = "MrsAllison"

// console.log(re.test(s));
// console.log(re.test(s2));
// console.log(re.test(s3));
// console.log(re.test(s4));
// console.log(re.test(s5));

// console.log(titlere.test(title))
// console.log(titlere.test(title1))
// console.log(titlere.test(title2))
// console.log(titlere.test(title3))
// console.log(titlere.test(title4))
// console.log(titlere.test(title5))
// console.log(titlere.test(title6))
// console.log(titlere.test(title7))

numberstring = "1232 and 121"
numberstring1 = "and"

console.log(numberstringre.test(numberstring))
console.log(numberstringre.test(numberstring1))
// console.log(numberstringre.test(numberstring2))
// console.log(numberstringre.test(numberstring3))
// console.log(numberstringre.test(numberstring4))
// console.log(numberstringre.test(numberstring5))
// console.log(numberstringre.test(numberstring6))
// console.log(numberstringre.test(numberstring7))