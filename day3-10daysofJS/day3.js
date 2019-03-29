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




var a = [2, 3, 6, 6, 5];
console.log(getSecondLargest(a));
var s = "reverseme"
reverseString(s)
reverseString(1234)
