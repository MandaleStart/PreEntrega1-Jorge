import Sidebar from '../../components/Main/Sidebar/Sidebar'
import ItemListContainer from '../../components/Main/LoadZone/ItemListContainer/ItemListContainer';

const SolarCare = () => {
    return (
        <main className='row'>
        <div className='col-2 col-order-1'><Sidebar /></div>
        <div className='col col-order-2'>
        <h1> Productos de proteccion solar</h1>
        <ItemListContainer categoria="proteccion-solar" filter="" /></div>
        </main>
    );
};

export default SolarCare;