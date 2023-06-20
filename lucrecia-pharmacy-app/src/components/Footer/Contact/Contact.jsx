import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div>
      <h3>Contacto</h3>
      <ul className="list-unstyled">
        <li><Link className="text-reset" to="tel:+598 4447 4952"><PhoneIcon />Telefono: 4447 4952 </Link>
        </li>
        <li><Link className="text-reset" to="https://api.whatsapp.com/send/?phone=59898149089" target="_blank" rel='noreferrer'><WhatsAppIcon />Whatsapp: 098 149 089</Link>
        </li>
        <li><Link className="text-reset" to="../contacto"><EmailIcon />contacto@farmacialucrecia.com</Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;