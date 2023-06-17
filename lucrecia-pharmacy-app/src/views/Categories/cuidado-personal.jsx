import Sidebar from '../../components/Main/Sidebar/Sidebar';
import ItemListContainer from '../../components/Main/LoadZone/ItemListContainer/ItemListContainer';

const PersonalCare = () => {
    return (
        <main className='row'>
            <div className='col-2 col-order-1'><Sidebar /></div>
            <div className='col col-order-2'>
                <h1> Productos de Cuidado Personal</h1>
                <ItemListContainer categoria="cuidado-personal" filter="" />
            </div>
        </main>

    );
};

export default PersonalCare;