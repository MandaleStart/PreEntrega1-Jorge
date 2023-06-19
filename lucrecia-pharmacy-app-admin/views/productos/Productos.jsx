import Productlist from "./ProductList"
import ProductMod from "./ProductMod/ProductMod";
const Productos = () => {
    return (
        <>
            <main className="container row">
                <Productlist ></Productlist>
                <ProductMod ></ProductMod>
                
            </main>
        </>
    )
}
export default Productos;