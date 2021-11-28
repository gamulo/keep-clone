import React,{useState, useEffect} from "react";
import NavBar from "../Presentational/NavBar";
import NewTodo from "../Presentational/NewTodo";
import TodoList from "../Presentational/TodoList";
// import firebase from "../firebase";
//comment

export default function App(){
    const [todo, setTodo] = useState({});
    // const ref =firebase.firestore().collection("keep-clone")

    const handleChange = ({target}) => {
        const {name, value} = target;
        setTodo((prev) =>({
            ...prev,
            id: Date.now(),
            [name]:value
        }));
    };

    const [list, setAllList] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!todo.toDo) return;
        setAllList((prev) => [todo, ...prev])
        setTodo({})
    }

    const handleDelete = (userIdtoRemove) => {
        setAllList((prev) => prev.filter(
            (todo) => todo.id!==userIdtoRemove
        ))

    }

    const [newlist, setNewList] =useState([])
    const handleUpdate = ({target}) => {

    }


    return (
        <div>
            <NavBar />
           
            <div className="flex justify-center">
                    <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" 
                    className="w-50 h-20 mr-2" />

                    <img src="https://anf.al/assets/blog-images/2021-03-06-tailwindcss-review-by-a-backend-developer/tailwindcss.png" 
                    className="w-50 h-20" />
            </div>
            <br/>
            <NewTodo 
            todo = {todo}
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}
            />
            <TodoList
            handleSubmit = {handleSubmit}
            list = {list}
            handleDelete={handleDelete}
            />
           
            
        </div>
    )
}