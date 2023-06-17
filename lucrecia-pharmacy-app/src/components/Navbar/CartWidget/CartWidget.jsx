import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    const cartItemsCount = 5; // Número fijo para simular la cantidad de productos en el carrito
  
    return (
      <a className="cart-widget text-reset" href='./carrito'>
        <ShoppingCartIcon className="cart-icon" />
        <span className="cart-count">{cartItemsCount}</span>
      </a>
    );
  };
  
  export default CartWidget;