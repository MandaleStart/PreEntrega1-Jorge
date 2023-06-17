import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact = () => {
  return (
    <div>
      <h3>Contacto</h3>
      <ul className="list-unstyled">
        <li><a className="text-reset" href="tel:+598 4447 4952"><PhoneIcon />Telefono: 4447 4952 </a>
        </li>
        <li><a className="text-reset" href="https://api.whatsapp.com/send/?phone=59898149089" target="_blank" rel='noreferrer'><WhatsAppIcon />Whatsapp: 098 149 089</a>
        </li>
        <li><a className="text-reset" href="../contacto"><EmailIcon />contacto@farmacialucrecia.com</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;