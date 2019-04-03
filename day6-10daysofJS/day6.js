const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function getDayName(dateString) {
    let dayName;
    // Write your code here
    let dataob = new Date(dateString)
    dayName = dayArray [dataob.getDay()]
    return dayName;
}

date = "10/11/2009"
console.log(getDayName(date));