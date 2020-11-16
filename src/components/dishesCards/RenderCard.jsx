import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography , IconButton } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  icons: {
    marginLeft: 'auto',
  },
  price: {
    marginLeft: 'auto',
    fontWeight: "bold",
    fontSize: "1rem",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const precio = "2000 ARS";

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        className={classes.media}
        image="https://www.goya.com/media/4098/venezuelan-shredded-beef.jpg?quality=80"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" align = "justify">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Compartir">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="Añadir al carrito">
          <AddShoppingCartIcon />
        </IconButton>
        <Typography className={classes.price} color="textSecondary" >
          PRECIO: {precio}
        </Typography>
      </CardActions>
    </Card>
  );
}