import StockHider from './StockHider/stockHider';
import PriceFilter from './PriceFilter/PriceFilter';
import BrandsFilter from './BrandsFilter/BrandsFilter';
const Sidebar = () => {


  return (
    <div className="sidebar col col-order-1">
      <h2>Filtrado</h2>

      <div className="filter-section">
        <h3>Stock</h3>
        <StockHider />
      </div>
      <hr /> {/*borrar despues */}
      <div className="filter-section">
        <h3>Precio</h3>
        <PriceFilter />
      </div>
      <hr /> {/*borrar despues */}
      <div className="filter-section">
        <h3>Marcas</h3>
        <BrandsFilter />
      </div>
    </div>
  );
};

export default Sidebar;