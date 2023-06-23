import RedesSociales from './SocialNetworks/SocialNetworks';
import Horario from './Schedule/Schedule';
import Direccion from './Address/Address';
import Contacto from './Contact/Contact';
import Informacion from './Information/Information';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark mt-auto text-white py-4">
      <div className="container">
        <div className="row row-order-1">
          <div className="col-md-3">
            <RedesSociales className="col" />
          </div>
          <div className="col-md-3">
            <Horario className="col" />
          </div>
          <div className="col-md-3">
            <Direccion className="col" />
          </div>
          <div className="col-md-3">
            <Contacto className="col" />
          </div>
        </div>
        <div className="row-order-2">
          <Informacion className="a"/>
        </div>

      </div>
    </footer>
  );
};

export default Footer;