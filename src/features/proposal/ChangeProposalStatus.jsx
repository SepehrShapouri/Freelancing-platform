import { Select } from "antd";
import { Fragment, useState } from "react";
import React from "react";
const statusOptions = [
  { key: '1', label: "در انتظار تایید" },
  { key: '2', label: "تایید" },
  { key: '0', label: "رد کردن" },
];
export default function ChangeProposalStatus({onSubmit}) {
    const [status,setStatus] = useState(2)
  return (
    <div className="flex flex-col gap-y-3 w-full">
            <Select
            defaultValue={status}
            onChange={(e)=>setStatus(e)}
    style={{
        width:'full',
        height:50,
        fontFamily:'Vazir',
      }}
    placeholder="تایین وضعیت پیشنهاد"
    options={[
      {
        value: 0,
        label: 'رد کردن',
      },
      {
        value: 1,
        label: 'در انتظار تایید',
      },
      {
        value: 2,
        label: 'تایید کردن',
      },
    ]}
  />
  <button className="bg-cyan-700 text-white rounded-lg py-3 px-2 text-lg hover:opacity-80 transition-all dark:bg-dark-mode" onClick={()=>onSubmit(status)}>تایید</button>
    </div>
);
}
