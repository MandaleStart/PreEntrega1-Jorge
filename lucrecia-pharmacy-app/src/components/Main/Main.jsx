{/*import LoadZone from './LoadZone/loadZone';*/ }
{/*import PublicitedZone  from './PublicitedZone/PublicitedZone'*/ }
import Sidebar from './Sidebar/Sidebar';
import ItemListContainer from './LoadZone/ItemListContainer/ItemListContainer';

const Main = () => {
  return (<main className='row'>
  <div className='col-2 col-order-1'>
      <Sidebar />
  </div>
  <div className='col col-order-2'>
      <h1> Todos Los productos</h1>
      <ItemListContainer categoria="all" filter="" />
  </div>
</main>
  );
};

export default Main;