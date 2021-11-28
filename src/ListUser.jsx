import React from "react";

export default function ListUser ({allUser, handleDelete}) {
    return (
        <ul>
            {allUser.map(({firstName, lastName, id})=> (
            <li key={id}>
                <div>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <button onClick={()=>handleDelete(id)}> x </button>
                </div>
            </li>
            ))}
        </ul>
    )
}