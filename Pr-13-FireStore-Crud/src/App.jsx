import { BrowserRouter, Route, Routes } from "react-router-dom"
import Table from "./pages/Table"
import Form from "./pages/Form"
import Edit from "./pages/Edit"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/add" element={<Form />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
