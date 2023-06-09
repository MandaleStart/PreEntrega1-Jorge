import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import Contact from './views/ContactPage'
import FavPage from './views/FavPage/FavPage'
import CartPage from './views/CartPages/CartPage';
import UserPage from './views/UserPage';
import ErrorPage from './views/ErrorPage';
import SearchPage  from './views/SearchPage';
import CatContainer from './components/Main/LoadZone/CatContainer/CatContainer'
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
      <Route path='/category/:id' element={<CatContainer />}></Route>
      <Route path='/item/:id'element={<ItemDetailContainer />}></Route>
      <Route path='/search'element={<SearchPage />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>

  );
};

export default App;