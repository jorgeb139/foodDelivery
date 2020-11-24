import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, Card, CardHeader, CardMedia, CardContent, CardActions, Typography , IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Grid } from "@material-ui/core";
import axios from "axios";

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
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    marginTop: "20px"
  }
}));

const baseURL = "dishes.json";

const RenderCard = () => {
  const classes = useStyles();

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    (async () => {
      const dishes = await axios.get(baseURL);
      setDishes(dishes.data);
    })();
  }, []);
  
  const [cartItems, setCartItems] = useState ([]);

  const addToCart = (dishes) => {
    const cartItems = cartItems.slice();
    let alreadyInCart = false;
    cartItems.foreach ((item) => {
      if (item.id === dishes.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart) {
      cartItems.push({...dishes, count: 1});
    }
  }; 

  const prueba = () => {
    console.log("click")
  };

  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      {
        dishes.map((dishes) => (
          <Grid item xs={12} sm={6} md={4} key={ dishes.id }>
          <Card className={classes.root} >
            <CardActionArea href="#" color="inherit">
            <CardHeader
              title={ dishes.name } 
            />
              <CardMedia
                className={classes.media}
                image={ dishes.picture }
                title={ dishes.name }
                alt={ dishes.name }
              />
            </CardActionArea>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" align = "justify">
                `{ dishes.description }`
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography className={classes.price} color="textSecondary" >
                PRECIO: { dishes.price }
              </Typography>
              <IconButton aria-label="Añadir al carrito" onClick={()=>prueba()}>
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}

export default RenderCard;