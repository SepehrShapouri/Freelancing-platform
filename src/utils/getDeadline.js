import { toEnDigit } from "./toEnDigits"
import { toTimestamp } from "./toTimeStamp"

export function getDeadline(rawDate){
    const date =rawDate.format("MM D YYYY").split(/(\s+)/)
    const persianDate = {
        year:parseInt(toEnDigit(date[4])),
        month:parseInt(toEnDigit(date[0])),
        day:parseInt(toEnDigit(date[2]))
      }
      const {year,month,day} = persianDate
      const deadline = new Date(toTimestamp(year,month,day)).toISOString()
    return deadline
}