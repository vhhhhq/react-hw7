import React from 'react'
import { useState } from 'react'

function UseState()  {
    const [count, setCount] = useState(0);
    return (
      <>
        <p>Счёт: {count}</p>
        <button onClick={() => setCount(0)}>Сбросить</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );

}

export default UseState