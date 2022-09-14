import React from 'react'
import { useState, useMemo } from 'react'

function UseMemo() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  useMemo(() => {
    let i = 0
    while ( i < 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])
   
  const isEven =  useMemo(() => {
    let i = 0
    while ( i < 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])
  


  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <p>{isEven ? 'Even': 'Odd'}</p>
      </div>
      
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        
      </div>
     
    </div>
  )
}

export default UseMemo