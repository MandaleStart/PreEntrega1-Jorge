import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteWidget = () => {
  const favoriteItemCount = 3; // Número fijo para simular la cantidad de elementos favoritos
  
  return (
    <a className="favorite-widget text-reset" href='./fav.html'>
      <FavoriteIcon className="favorite-icon" />
      <span className="favorite-count">{favoriteItemCount}</span>
    </a>
  );
};

export default FavoriteWidget;