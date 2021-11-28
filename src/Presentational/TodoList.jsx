import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export default function TodoList({list, handleDelete, handleChange,newList}) {
  const [color, newColor] = useState("white")

  const divStyle = {backgroundColor: color}
  const btnWhite = {backgroundColor: "white"}
  const btnOrange = {backgroundColor: "orange"}
  const btnPink = {backgroundColor: "pink"}
  const btnWhip = {backgroundColor: "papayawhip"}
  const btnTomato = {backgroundColor: "tomato"}
  const btnGray = {backgroundColor: "#D6D6D6"}
  const btnTan = {backgroundColor: "#D2B48C"}
    return (
        <ul className="grid grid-cols-4">
        {list.map(({ toDo, desc, id }) => (
          <li key={id} className="em-2 rounded-xl border-2 ml-3" style={divStyle}>

            <div>
              <h1 className="text-2xl font-bold ">{toDo}</h1>
            </div>

            {!desc ? null : <p>{desc}</p>}

            <button 
            onClick={() => handleDelete(id)}
            className="float-right"
            >
              <FontAwesomeIcon icon={faTrash} className="text-lg" />
            </button>

          <div className="flex items-center mt-4">
          <button onClick={()=>newColor("white")}>
                <div className="w-5 h-5 rounded-full ml-1" style={btnWhite}></div>
            </button>
            <button onClick={()=>newColor("orange")}>
                <div className="w-5 h-5 rounded-full ml-1" style={btnOrange}></div>
            </button>
            <button onClick={()=>newColor("pink")}>
                <div className="w-5 h-5 rounded-full ml-1" style={btnPink}></div>
            </button>
            <button onClick={()=>newColor("papayawhip")}>
                <div className="w-5 h-5 rounded-full ml-1" style={btnWhip}></div>
            </button>
            <button onClick={()=>newColor("tomato")}>
                <div className="w-5 h-5 rounded-full ml-1" style={btnTomato}></div>
            </button>
            <button onClick={()=>newColor("#D6D6D6")}>
                <div className="w-5 h-5 rounded-full ml-1" style={btnGray}></div>
            </button>
            <button onClick={()=>newColor("#D2B48C")}>
                <div className="w-5 h-5 rounded-full ml-1" style={btnTan}></div>
            </button>
          </div>  
          </li>
          
        ))}
      </ul>
   
    )
}
