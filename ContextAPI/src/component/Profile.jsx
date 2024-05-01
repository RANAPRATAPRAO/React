import React from "react";
import { useContext } from "react";
import userContext from "../contexts/UserContext";


function Profile(){
    const {user}=useContext(userContext)


    if(!user) return <div>please login</div>


    return <div>Welcome {user.username}</div>
}

export default Profile