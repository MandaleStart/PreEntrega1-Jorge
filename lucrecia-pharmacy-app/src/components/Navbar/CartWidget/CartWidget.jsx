import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    const cartItemsCount = 5; // Número fijo para simular la cantidad de productos en el carrito
  
    return (
      <div className="cart-widget">
        <ShoppingCartIcon className="cart-icon" />
        <span className="cart-count">{cartItemsCount}</span>
      </div>
    );
  };
  
  export default CartWidget;