function monthsInterval(month1, month2, count = 0, arr = []) {
   let arr = ['January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October',
'November', 'December']
    if(count === 12) count = 0
   if(month1.getFullYear() != month2.getFullYear()){
    count = month1.getMonth()
   }

   

 
}
let december = new Date(2017, 11, 1); 
let january = new Date(2018, 0, 1);

console.log(monthsInterval(december, january))