import React, { useState } from "react";


function App() {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [cpass, setCpass] = useState("")
  const [userErr, setUserErr] = useState(false)
  const [passerr, setPasserr] = useState(false)
  const [cPassErr, setCPassErr] = useState(false);

  function handleForm(e) {
    if(user==='') alert("Enter user Name")
    else if(email==='') alert("Enter email")
    else if(pass==="") alert("Enter password")
    else if(pass===cpass) alert("password not matched")
    else alert("successfully submited")
 
    
    e.preventDefault();
  }

  function handleUser(e) {
    let item = e.target.value
    if (item.length < 4) { setUserErr(true) }
    else { setUserErr(false) }
    setUser(item)
  }

  const handlePass = (e) => {
    let item = e.target.value
    if (item.length < 8) setPasserr(true)
    else setPasserr(false)
    setPass(item)
  }

  const handleCpass = (e) => {

    let item = e.target.value
    if (pass !== item) setCPassErr(true);
    else setCPassErr(false)
    setCpass(item)
  }



  return (
    <form action="" onSubmit={handleForm}>
      <input type="text"
        placeholder="Enter your name"
        onChange={handleUser}
      />{userErr ? <span>Name should be more then four characters</span> : ""} <br /><br />

      <input type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)} /><br /><br />

      <input type="password"
        placeholder="Enter password"
        onChange={handlePass}
      />{passerr ? <span>Enter valid passord</span> : ""}<br /><br />

      <input type="password"
        placeholder="Enter password"
        onChange={handleCpass}
      />{cPassErr ? <span>Enter passord not matched</span> : ""}<br /><br />
      <button type="submit" >SubMit</button>

    </form>
  )

}

export default App;