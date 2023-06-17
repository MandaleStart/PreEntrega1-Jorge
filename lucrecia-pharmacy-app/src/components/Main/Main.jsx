import LoadZone from './LoadZone/loadZone';
{/*import PublicitedZone  from './PublicitedZone/PublicitedZone'*/}
import Sidebar from './Sidebar/Sidebar';

const Main = () => {
    return (
      <main className="container row">
        
        <Sidebar />
        
     <LoadZone />
        
        {/*<PublicitedZone className="col-2 col-order-3" /> sin desarrollo*/}
        
      </main>
    );
  };
  
  export default Main;