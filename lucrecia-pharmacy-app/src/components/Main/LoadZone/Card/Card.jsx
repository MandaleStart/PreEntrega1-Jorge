/* eslint-disable react/prop-types */
import { Card as MUICard, CardContent, CardMedia, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  cardContent: {
    flexGrow: 1,
  },
  buyButton: {
    display: 'block',
    width: '100%',
    background: theme.palette.success.main,
    color: theme.palette.common.white,
    '&:hover': {
      background: theme.palette.success.dark,
    },
  },
  favoriteButton: {
    background: theme.palette.warning.main,
    color: theme.palette.common.white,
    '&:hover': {
      background: theme.palette.warning.dark,
    },
  },
}));
const Card = ({ producto }) => {
  const classes = useStyles();
  const renderProducto = producto.image || "https://i.ibb.co/MpG69V7/nofoto.png";

  return (
    <Grid item xs={12} md={4}>
      <MUICard className={classes.card}>
        <CardMedia className={classes.cardMedia} image={renderProducto} alt={producto.name} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {producto.name}
          </Typography>
        </CardContent>
        {producto.stock === 0 ? (
          <Button id={`buy-${producto.id}`} className={classes.buyButton} disabled>
            Sin Stock
          </Button>
        ) : (
          <Button id={`buy-${producto.id}`} className={classes.buyButton} startIcon={<ShoppingCartIcon />}>
            ${producto.cost}
          </Button>
        )}
        <Button id={`fav-${producto.id}`} className={classes.favoriteButton} startIcon={<FavoriteIcon />} />
      </MUICard>
    </Grid>
  );
};

export default Card;
