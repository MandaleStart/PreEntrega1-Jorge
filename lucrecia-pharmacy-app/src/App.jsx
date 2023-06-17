import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import Contact from './views/ContactPage'
import FavPage from './views/FavPage'
import CartPage from './views/CartPage';
import UserPage from './views/UserPage';
import Cosmetica from './views/Categories/cosmetica';
import PersonalCare from './views/Categories/cuidado-personal';
import Joyeria from './views/Categories/joyeria';
import Brands from './views/Categories/marcas-destacadas';
import Maternidad from './views/Categories/maternidad';
import Medicamentos from './views/Categories/medicamentos';
import Perfumeria from './views/Categories/perfumeria';
import SolarCare from './views/Categories/proteccion-solar';
import ProductosNaturales from './views/Categories/productos-naturales';
import ErrorPage from './views/ErrorPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (<BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/contacto' element={<Contact />}></Route>
      <Route path='/favoritos' element={<FavPage />}></Route>
      <Route path='/usuario' element={<UserPage />}></Route>
      <Route path='/carrito' element={<CartPage />}></Route>
      <Route path='/cosmetica' element={<Cosmetica />}></Route>
      <Route path='/cuidado-personal' element={<PersonalCare />}></Route>
      <Route path='/joyeria' element={<Joyeria />}></Route>
      <Route path='/Marcas-Destacadas'element={<Brands />}></Route>
      <Route path='/maternidad' element={<Maternidad />}></Route>
      <Route path='/medicamentos' element={<Medicamentos />}></Route>
      <Route path='/perfumeria' element={<Perfumeria />}></Route>
      <Route path='/productos-naturales' element={<ProductosNaturales />}></Route>
      <Route path='/proteccion-solar' element={<SolarCare />}></Route>
      <Route path='/carro'element={<CartPage />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>

  );
};

export default App;