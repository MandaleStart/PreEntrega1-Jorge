import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import ErrorPage from "../views/ErrorPage"
import Usuarios from "../views/usuarios/Usuarios"
import Productos from "../views/productos/Productos"
import Pedidos from '../views/Pedidos/Pedidos';
import PedidoDetalle from "../views/Pedidos/PedidoDetalle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../views/Login';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/usuarios' element={<Usuarios />}></Route>
        <Route path='/productos' element={<Productos />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/pedidos' element={<Pedidos />}></Route>
        <Route path="/pedidos/:id" element={<PedidoDetalle />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  )
}

export default App
