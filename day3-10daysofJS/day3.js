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

var a = [2, 3, 6, 6, 5];
console.log(getSecondLargest(a));
