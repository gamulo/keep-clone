import React from "react";

export default function NewUser ({user, handleChange, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            First Name: <input 
            type="text" 
            name = "firstName"
            value = {user.firstName || ''}
            onChange={handleChange}
            />
            Last Name:<input 
            type="text" 
            name = "lastName"
            value = {user.lastName || ''}
            onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    )
}