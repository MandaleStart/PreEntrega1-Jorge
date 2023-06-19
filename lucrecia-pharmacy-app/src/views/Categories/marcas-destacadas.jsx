import Sidebar from '../../components/Main/Sidebar/Sidebar';
import ItemListContainer from '../../components/Main/LoadZone/ItemListContainer/ItemListContainer';

const Brands = () => {
    return (
        <main className='row'>
        <div className='col-2 col-order-1'><Sidebar /></div>
        <div className='col col-order-2'>
        <h1> Productos de las marcas destacadas</h1>
        <div className="container">
    <div className="alert alert-danger mt-4">
      <h4 className="alert-heading">Zona en Desarrollo</h4>
      <p>Esta sección está en desarrollo. Pronto estará disponible.</p>
    </div>
  </div>
        </div>
        </main>
    );
};

export default Brands;