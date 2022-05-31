import React, { useState, useEffect } from 'react';

export default function(props){
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect')
    fetch('/api/getLists')
  },[count])

  const handleCount = ()=>{
    setCount(count + 1)
  }

  return (
    <div>
      <h1 onClick={handleCount}>count:{count}</h1>
    </div>
  )
}
