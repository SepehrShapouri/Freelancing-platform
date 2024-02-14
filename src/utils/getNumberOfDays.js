export function getNumberOfDays(date1,date2){
let Difference_in_time = date1.getTime() - date2.getTime()
let Difference_in_Days = 
Math.round(
    Difference_in_time / (1000 * 3600 * 24)
)
return Difference_in_Days
}