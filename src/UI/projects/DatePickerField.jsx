import React from 'react'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from 'lucide-react';

function DatePickerField({label,date,setDate}) {
  return (
    <>
    <label>{label}</label>
        <div className='border-b  flex py-3 px-2 border-slate-400 shadow-sm hover:shadow-lg transition-all mb-4'>
              <DatePicker 
            containerClassName="w-full"
            inputClass="w-full"
            calendarPosition="bottom-center"
            value={date}
            onChange={(date) => setDate(date)}
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}/>
            <Calendar/>
    </div>
    </>
  )
}

export default DatePickerField