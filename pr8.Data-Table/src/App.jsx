import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import View from './parts/View';
import Add from './parts/Add';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
import Edit from "./parts/Edit";


function App() {
  

  return (
    <>

   
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Add/>} />
        <Route path="/view" element={<View />} />
        <Route path="/Edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
