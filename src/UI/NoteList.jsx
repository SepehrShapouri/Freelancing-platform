import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useState } from "react";
import { FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { Button } from "./shadcn/Button";
import toast from "react-hot-toast";
import truncateText from "../utils/truncateText";

function NoteList() {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [noteValue, setNoteValue] = useState({ title: "", description: "" });
  const [noteFormOpen, setNoteFormOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const addNotehandler = (e) => {
    e.preventDefault();
    if (noteValue.title == "" || noteValue.description == "") {
      toast.error("خالی نباشهههههه");
    } else {
      const newNote = {
        title: noteValue.title,
        description: noteValue.description,
        id: new Date().getTime(),
      };
      setNoteFormOpen(false);
      setNotes([...notes, newNote]);
      toast.success("تبریک میگم نت شما اضافه شد");
    }
    console.log(notes);
  };
  const deleteNote =(note)=>{
    const filteredNotes = notes.filter(n=>n.id != note.id)
    setNotes(filteredNotes)
  }
  return (
    <>
      {noteFormOpen ? (
        <NoteForm
          noteValue={noteValue}
          addNotehandler={addNotehandler}
          setNoteValue={setNoteValue}
        />
      ) : (
        <div className="w-[310px] h-[310px] overflow-y-auto shadow-xl rounded-xl bg-blue-50 p-4 flex flex-col items-center dark:bg-slate-600">
          <h2 className="font-bold text-cyan-900 text-xl border-b border-b-blue-200 dark:border-b-indigo-200 dark:text-indigo-400">
            نت های من
          </h2>
          <div className="flex flex-col gap-1 mt-4">
            <div className="flex flex-wrap gap-2  w-full justify-center">
              {notes.map((note) => (
                <Note key={note.id} note={note} deleteNote={deleteNote}/>
              ))}
              <div
                className="hover:translate-y-1 transition-all w-[60px] h-[60px] flex items-center justify-center rounded-xl shadow-xl bg-white dark:bg-slate-700"
                onClick={() => setNoteFormOpen(true)}
              >
                <FaPlus className="text-cyan-800 text-3xl cursor-pointer dark:text-indigo-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NoteList;
export function Note({ note,deleteNote }) {
  const [noteOpen, setNoteOpen] = useState(false);
  const closeNote=()=>{
    setNoteOpen(false)
    console.log(noteOpen)
  }
  return (
    <>
    {!noteOpen ?     <div
      onClick={() => setNoteOpen(true)}
      className={`bg-white cursor-pointer w-[60px] h-[60px] dark:bg-slate-700
      shadow-xl rounded-xl text-xs flex items-center justify-center hover:translate-y-1 transition-all`}
    >
 <p>{truncateText(note.title, 3)}</p>
    </div> : 
    <div className="w-[290px] h-[290px] bg-white shadow-xl rounded-xl p-4 dark:bg-slate-700">
        <h2 className="flex w-full justify-between items-center text-2xl text-cyan-800 font-bold dark:text-white">{note.title}<span className="flex items-center gap-2"><FaTimes className="text-indigo-500 hover:text-indigo-400 transition-all cursor-pointer" onClick={()=>closeNote()}/><FaTrash className="text-rose-500 cursor-pointer hover:text-rose-400 transition-all" onClick={()=>deleteNote(note)}/></span></h2>
        <p className="text-sm text-sky-800 mt-4 m-4 dark:text-white">{note.description}</p>
    </div>
    }
    </>
  );
}
export function NoteForm({ addNotehandler, setNoteValue, noteValue }) {
  return (
    <div className="w-[310px] h-[310px] shadow-xl rounded-xl bg-blue-50 p-4 dark:bg-slate-600">
      <h2 className="text-xl text-cyan-800 font-bold dark:text-indigo-400">نت جدید</h2>
      <form
        className="mt-2 flex flex-col items-center gap-y-3"
        onSubmit={(e) => addNotehandler(e)}
      >
        <input
          type="text"
          className="bg-white w-full p-4 shadow-xl rounded-xl dark:bg-slate-700"
          placeholder="اسم نت"
          onChange={(e) =>
            setNoteValue({ ...noteValue, title: e.target.value })
          }
        />
        <textarea
          className="bg-white w-full shadow-xl rounded-xl p-4 dark:bg-slate-700"
          rows={4}
          placeholder="خود نت"
          onChange={(e) =>
            setNoteValue({ ...noteValue, description: e.target.value })
          }
        />
        <Button
          className="bg-sky-400 text-white hover:bg-sky-600 dark:bg-indigo-400"
          type="submit"
        >
          اضافه کن
        </Button>
      </form>
    </div>
  );
}
