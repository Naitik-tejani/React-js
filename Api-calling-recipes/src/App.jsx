import { useEffect } from "react"



function App() {
  
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes`)
    
  }, []);


  return (
    <div align="center">
    <h1>api</h1>
    
    </div>
  )
}

export default App
