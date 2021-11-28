import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function NewTodo({todo, handleChange, handleSubmit}) {
   
    return (
    <div>
        <form 
        onSubmit={handleSubmit} 
        className="flex flex-col items-center"
        >
        {!todo.desc ? null : (
        <>
        <input 
            type="text" 
            className=" font-bold text-xl rounded-lg "
            name="toDo"
            value = {todo.toDo || ""}
            onChange = {handleChange}
            placeholder="Title"
        />
    </> 
            )}
          <textarea 
            name="desc" 
            className="rounded-lg text-l"
            value={todo.desc || ""}
            onChange = {handleChange}
            placeholder="Take a note..."
            id="" 
            cols="30" 
            rows="1">
            </textarea>
          <button>
          <FontAwesomeIcon icon={faPlusCircle} className="text-2xl m-5" />
          </button>
        </form>
    </div>
    )
}
