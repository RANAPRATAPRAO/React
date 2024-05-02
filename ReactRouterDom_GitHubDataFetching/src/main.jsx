import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './component/Home.jsx'
import User from './component/User.jsx'
import GitHub, {githubInfoLoader} from './component/Github.jsx'
import {Route,RouterProvider,  createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Contact from './component/Contact.jsx'
import About from './component/About.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github'
      element={<GitHub/>}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
