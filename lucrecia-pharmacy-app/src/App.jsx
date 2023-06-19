import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import Contact from './views/ContactPage'
import FavPage from './views/FavPage/FavPage'
import CartPage from './views/CartPages/CartPage';
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
import SearchPage  from './views/SearchPage';
import ItemDetailContainer from './components/Main/LoadZone/ItemListContainer/ItemDetailContainer/ItemDetailContainer'
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
      <Route path='/category/cosmetica' element={<Cosmetica />}></Route>
      <Route path='/category/cuidado-personal' element={<PersonalCare />}></Route>
      <Route path='/category/joyeria' element={<Joyeria />}></Route>
      <Route path='/category/Marcas-Destacadas'element={<Brands />}></Route>
      <Route path='/category/maternidad' element={<Maternidad />}></Route>
      <Route path='/category/medicamentos' element={<Medicamentos />}></Route>
      <Route path='/category/perfumeria' element={<Perfumeria />}></Route>
      <Route path='/category/productos-naturales' element={<ProductosNaturales />}></Route>
      <Route path='/category/proteccion-solar' element={<SolarCare />}></Route>
      <Route path='/item/:id'element={<ItemDetailContainer />}></Route>
      <Route path='/search'element={<SearchPage />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>

  );
};

export default App;