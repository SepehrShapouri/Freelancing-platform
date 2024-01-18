import React from "react";

function Table({ children }) {
  return <table className="w-full text-sm">{children}</table>;
}
function TableHeader({ children }) {
  return <thead className="text-xs  bg-gray-50">{children}</thead>;
}
function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}
function TableRow({ children ,className =""}) {
  return <tr className={className}>{children}</tr>;
}
Table.header = TableHeader
Table.body = TableBody
Table.row = TableRow
export default Table;
