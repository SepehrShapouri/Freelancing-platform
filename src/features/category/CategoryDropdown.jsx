import React from "react";
import { Select } from "antd";
import { FaBoxOpen } from "react-icons/fa";
import useAllCategories from "./categoryHooks/useAllCategories";
export const options = [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ];
function CategoryDropdown({field,errors,name}) {
    const {categories,isLoading} = useAllCategories()
    const allOptions = categories?.map((category)=>({value:category._id,label:category.title}))

  return (
<div className="flex flex-col gap-y-3 my-1">
    <label htmlFor="category">
        دسته بندی
        <span className="text-xs text-error mr-1">*</span>
    </label>
<Select
{...field}
id="category"
      showSearch
      style={{
        width:'full',
        height:50,
        fontFamily:'Vazir',
      }}
      notFoundContent={
        <div className="flex flex-col items-center gap-y-4 p-4">
            <FaBoxOpen className="text-[40px] text-slate-200"/>
            <p className="font-[vazir] text-slate-400">دسته بندی یافت نشد</p>
        </div>
      }
      placeholder="جستجو در دسته بندی ها"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={allOptions}
    />
    {errors && errors[name] && <span className="text-xs text-error">{errors[name]?.message}</span>}
</div>
  );
}

export default CategoryDropdown;
