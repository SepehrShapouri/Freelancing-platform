import React, { useState } from "react";

function TagInput({ tags, setTags }) {
  function addTag(e) {
    if (e.key != "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
    e.preventDefault()
  }
  function removeTag(index) {
    const filteredTags = [...tags];
    setTags(filteredTags.filter((el, i) => i !== index));
  }
  return (
    <>
      <label>تگ ها</label>
      <div className="flex flex-wrap flex-grow gap-2 border-b p-3 border-slate-400 shadow-sm hover:shadow-lg  transition-all">
        {tags.map((tag, index) => (
          <TagItem key={index} tag={tag} removeTag={removeTag} index={index} />
        ))}
        <input
          type="text"
          onKeyDown={(e) => addTag(e)}
          className="placeholder:text-sm"
          placeholder="اضافه کردن تگ..."
        />
      </div>
    </>
  );
}

export default TagInput;

function TagItem({ tag, index, removeTag }) {
  return (
    <div className="flex bg-sky-50 rounded-2xl items-center px-2 py-2">
      <span
        className="text-center flex items-center ml-2 transition-all hover:bg-rose-400 justify-center h-[20px] w-[20px] bg-cyan-800 text-white rounded-full cursor-pointer"
        onClick={() => removeTag(index)}
      >
        &times;
      </span>
      <span className="text-cyan-800 text-sm">{tag}</span>
    </div>
  );
}
