import React, { useState } from "react";


function App() {

    const [islogIn, setisLogIn] =useState(false);
    const [loading, setLoading]=useState(false);
    const [user, setUser]=useState(null);


    const handleLogin=() =>{
        setLoading(true);
        setTimeout(()=>{
            setisLogIn(true);
            setUser({name:"rana pratap rao"});
            setLoading(false);
        },2000)
    };


    const handleLogOut=()=>{
        setisLogIn(false);
        setUser(null);
    }

    if(loading) {
        return <p>Loading...</p>
    }


    if(islogIn && user) {
        return(
            <div>
                <h2>Logged out , {user.name}</h2>
                <button onClick={handleLogOut}>LoggedOut</button>
            </div>
        )
    }



    return(
        <div>
            <h2>Please log in</h2>
            <button onClick={handleLogin}>LogIn</button>
        </div>
    )
}


export default App;