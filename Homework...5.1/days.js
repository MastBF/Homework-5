function dayOfYear(date) {
let newDate = new Date(date)
let startYear = new Date(newDate.getFullYear(),0,0)
return ((newDate - startYear) /24/60/60/1000)
}

console.log(dayOfYear("1/9/2019"))

