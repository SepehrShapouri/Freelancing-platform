import React from "react";

function Table({ children }) {
  return <table className=" text-sm "  >{children}</table>;
}
function TableHeader({ children }) {
  return <thead className="text-xs  bg-gray-50 dark:bg-slate-800">{children}</thead>;
}
function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}
function TableRow({ children ,className =""}) {
  return <tr className={`${className} dark:bg-gray-800`}>{children}</tr>;
}
Table.header = TableHeader
Table.body = TableBody
Table.row = TableRow
export default Table;
