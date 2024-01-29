import React from 'react'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from 'lucide-react';

function DatePickerField({label,onChange,value,name,errors}) {
  return (
    <>
    <label>{label} {<span className='text-xs text-error dark:text-rose-500'>*</span>}</label>
        <div className='border-b  flex py-3 px-2 border-slate-400 shadow-sm hover:shadow-lg transition-all'>
              <DatePicker 
              name={name}
            containerClassName="w-full"
            inputClass="w-full dark:bg-slate-800"
            calendarPosition="bottom-center"
            value={value || ""}
            onChange={(date)=>{
              onChange(date?.isValid? date:"")
            }}
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}/>
            <Calendar/>
    </div>
    {errors &&errors[name] &&<span className='text-xs text-error mb-4'>{errors[name]?.message}</span>}
    </>
  )
}

export default DatePickerField