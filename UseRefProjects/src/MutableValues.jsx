import { useEffect, useRef, useState } from "react"

const Mutable=()=>{
    const [count, setCount]=useState(0);
    const track=useRef(0);
    useEffect(()=>{
        track.current=count;
    },[count])

    return(
        <div>
           <h3>Current: {count}</h3>
           <button onClick={()=>setCount(count=>count+1)}>increase</button>
           <h3>Previous Count:{track.current}</h3>
        </div>
    )
}

export default Mutable;