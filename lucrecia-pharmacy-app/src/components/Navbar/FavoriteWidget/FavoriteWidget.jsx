import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteWidget = () => {
  const favoriteItemCount = 3; // Número fijo para simular la cantidad de elementos favoritos
  
  return (
    <Link className="favorite-widget text-reset" to='/favoritos'>
      <FavoriteIcon className="favorite-icon" />
      <span className="favorite-count">{favoriteItemCount}</span>
    </Link>
  );
};

export default FavoriteWidget;