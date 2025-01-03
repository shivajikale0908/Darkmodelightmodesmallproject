import React, { useState } from 'react'
import Button from './Components/Button'

function App() {
  const [val,setval] = useState(false)
  return (
    <div className={`w-full h-screen  flex flex-col justify-center items-center 
    ${val ? "bg-gray-400" : "bg-zinc-100"}
    
    `}>
      <h1 className='font-bold text-[3vw]'>{val ? "Dark Mode" : "Light Mode"}</h1>
      <Button val={val}  setval={setval}/>
    </div>
  )
}

export default App