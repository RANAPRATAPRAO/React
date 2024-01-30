import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  //const [count, setCount] = useState(0)
  let myObj={
    username:"Rana pratap rao",
    age:21
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="This is  the first test of TailWind with react " btnText="click me" />
      <Card username="second card of tailwind" />   
       </>
  )
}

export default App
