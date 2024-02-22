import React, { useState } from 'react'

const App = () => {
  let [a,b] = useState(0)
  return (
   <>
    <h1>{a}</h1>
    <button onClick={()=>b(a+1)} className='btn bg-info fw-bolder'>Change +</button>
   </>
  )
}

export default App