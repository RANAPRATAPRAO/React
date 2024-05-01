import React from "react";

import userContext from "../contexts/UserContext";
import { useState } from "react";
import { useContext } from "react";

function Login() {


    const [username, setUserName] = useState("")
    const [pass, setPass] = useState("")


    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, pass })

    }


    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="UserName"
            />
            {" "}
            <input type="text"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            {" "}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login