import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const cartItemsCount = 5; // Número fijo para simular la cantidad de productos en el carrito
  
    return (
      <Link className="cart-widget text-reset" to='/carrito'>
        <ShoppingCartIcon className="cart-icon" />
        <span className="cart-count">{cartItemsCount}</span>
      </Link>
    );
  };
  
  export default CartWidget;