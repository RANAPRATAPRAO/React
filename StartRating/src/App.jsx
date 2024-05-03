import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

import './App.css'

function App({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0)

  function handlClick(getCurrentIndex) {
    setRating(getCurrentIndex)
  }

  function handleMove(getCurrentIndex) {
    setHover(getCurrentIndex)
  }

  function handleLeave() {
    setHover(rating)
  }


  return (
    <div>
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;


        return (
          <FaStar
            key={index}
            className={index<= (hover || rating )?"active":"inactive"}
            onClick={() => handlClick(index)}
            onMouseMove={() => handleMove(index)}
            onMouseLeave={() => handleLeave()}
            size={40}
            />

          )
      })}
    </div>
  );
}


export default App;