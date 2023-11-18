import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Detail from "./pages/Detail"
import Success from "./pages/Success"

const App = () => {
  return (
    <>
    <div className=" container-fluid mx-auto">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/success" element={<Success/>} />
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App