import React from "react";
import Login from "./component/Login";
import Profile from "./component/Profile";
import userContextProvider from "./contexts/UserContextProvider";


function App(){
  return(
    <userContextProvider>
      <Login />
      <Profile/>
    </userContextProvider>
  )
}

export default App;