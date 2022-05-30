import React, { useState, useEffect } from 'react';

export default function(props){
  const [count, setCount] = useState()

  useEffect(() => {

  }, [])

  return (
    <div>
      <h1>count:{count}</h1>
    </div>
  )
}
