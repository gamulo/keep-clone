import React,{useState} from "react";
import NewUser from "./NewUser";
import ListUser from "./ListUser";

export default function Profile() {
    const [user, setUser] = useState({});

    //HANDLE EVENT
    const handleChange = ({target}) => {
        const {name, value} = target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const [allUser, setAllUser] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setAllUser((prev)=> [user, ...prev])
        setUser({});
    }
    
    const handleDelete =(userIdtoRemove) => {
        setAllUser((prev)=> prev.filter (
            (user) => user.id!== userIdtoRemove
        ));
    };
    return (
        <div>
            <NewUser 
            handleChange = {handleChange}
            user = {user}
            handleSubmit = {handleSubmit}
            />
            <ListUser 
            allUser ={allUser}
            handleDelete={handleDelete}
            />
        </div>
    );
  }

