import React from 'react'
import { useEffect, useState } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
        setCount((count) => count + 1);
        }, 15000);
    
    });

return (
    <div>
        <button>{count}</button>
    </div>
        
)
}

export default UseEffect