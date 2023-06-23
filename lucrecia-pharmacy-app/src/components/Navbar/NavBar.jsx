import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import CartWidget from './CartWidget/CartWidget';
import Categories from './Categories/Categories';
import FavoriteWidget from './FavoriteWidget/FavoriteWidget';


const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Logo />
        <SearchBar />
        <CartWidget />
        <FavoriteWidget/>
        
      </div>
     
     <Categories />
     
    </nav>
  );
};

export default Navbar;