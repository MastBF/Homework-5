function getDay(time){
let arr = ["Sunday", "Monday", "Tuesday",
"Wednesday", "Thursday", "Friday","Saturday"]    
let date = new Date(time)

return arr[date.getDay()]

}

console.log(getDay("11/10/2016"))