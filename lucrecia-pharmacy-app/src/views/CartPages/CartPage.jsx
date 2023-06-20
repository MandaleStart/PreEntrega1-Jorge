
import CartSettings from "./CartSettings/CartSettings"
import CartTable from "./CartTable/CartTable";
const CartPage = () => {
    return (
        <main className="container row">
            <h1>Zona de carrito</h1>
            <div className="container">
                <div className="alert alert-danger mt-4">
                    <h4 className="alert-heading">Zona en Desarrollo</h4>
                    <p>Esta sección está en desarrollo. Pronto estará disponible.</p>
                </div>
            </div>
            <div className="col col-prder-1">
            <CartTable />
            </div>
            
            <div className="col-4 col-order-2">
            <CartSettings />
            </div>
        </main>
    );
};

export default CartPage;