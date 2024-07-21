import React, { useRef } from "react";


const Render = () => {
    const count = useRef(1);

    count.current++;
    return (
        <h1>Render count: {count.current}</h1>

    )
}

export default Render;