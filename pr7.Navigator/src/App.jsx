import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./page/View";
import './App.css'
import Edit from "./page/Edit";
import Add from "./page/Add";


const App = () => {

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<View />} />
            <Route path="/Add" element={<Add />} />
            <Route path="/Edit" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </>
   );
};

export default App;
