import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const SocialNetworks = () => {
  return (
    <div>
      <h3>Redes Sociales</h3>
      <ul className='list-unstyled'>
        <li>
          <Link to="https://www.instagram.com/lucreciafarmacia/" className="me-4 text-reset" target="_blank" rel='noreferrer'>
            <InstagramIcon />Lucreciafarmacia
          </Link>
        </li>
        <li>
          <Link to="https://www.facebook.com/profile.php?id=100010059819004" className="me-4 text-reset" target="_blank" rel='noreferrer'>
            <FacebookIcon /> Farmacia Lucrecia
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialNetworks;