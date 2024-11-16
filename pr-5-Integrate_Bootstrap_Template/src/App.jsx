import Header from "./parts/Header"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Nav from "./parts/Nav"
import Banner from "./parts/Banner"
import Menu from "./parts/Menu"
import Product from "./parts/Product"
import Threebox from "./parts/Threebox"
import Fourbox from "./parts/Fourbox"



function App() {
    return (
    <>
    <Nav/>
    <Header/>
    <Banner/>
    <Menu/>
    <Product/>
    <Threebox/>
    <Fourbox/>
    </>
  )
}

export default App
