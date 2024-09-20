import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {

  const [count,setCount]=useState(0)

  const incriment= ()=>{
    setCount(count+1);
  }
 
  const dicriment= ()=>{
    setCount(count-1);
  }

  return (
   <>
   <Counter
   
   plush={incriment}
   min={dicriment}
   
   />
   </>
  )
}

export default App