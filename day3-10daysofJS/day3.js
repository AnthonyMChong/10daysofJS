function getSecondLargest(nums) {
    // Complete the function
    let largest = nums[0];
    let secondlargest = nums[0];
    for (let i of nums) {
        if (i > largest) {
            secondlargest = largest;
            largest = i;
        }
        if ( (i < largest) && (i > secondlargest)) {
            secondlargest = i;
        }
    }
    return secondlargest
}

function reverseString(s) {
    try {
        let revs;
        revs = s.split("").reverse().join("");
        console.log(revs);
    } catch (e) {
        console.log(e.message);
        console.log(s);
    }
    
}

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    try {
        if (a > 0) {
            return "YES";
        } else if (a == 0) {
            throw "Zero Error"
        } else {
            throw "Negative Error"
        }
    }
    catch (e) {
        return e
    }
    
}




var a = [2, 3, 6, 6, 5];
console.log(getSecondLargest(a));
var s = "reverseme"
reverseString(s)
reverseString(1234)
console.log(isPositive(-2))
console.log(isPositive(0))
console.log(isPositive(11))