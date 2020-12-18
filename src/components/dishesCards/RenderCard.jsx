import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  CardActionArea, 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  Button
  } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Grid } from "@material-ui/core";
import axios from "axios";
import { motion } from "framer-motion";

import basics from "../../assets/dummyData/basics.json";
import ModalDishes from '../dishesCards/ModalDishes';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  icons: {
    marginLeft: 'auto',
  },
  price: {
    marginLeft: '0.5rem',
    fontWeight: "bold",
    fontSize: "1rem",
  },
  cartButton: {
    marginLeft: 'auto',
    margin: theme.spacing(1),
  },
  gridContainer: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
    marginTop: "20px",
  },
  textfield:{
      width: "100%",
  },
}));

const cardsVariants = {
  hidden: {
    opacity: 0,
    y: '10vw'
  },
  visible:{
    opacity: 1,
    y: 0,
    transition:{ 
      delay: 1.5, 
      duration: 1, 
      type: "spring", 
      stiffness: 100 
    },
  },
};

const baseURL = "dishes.json";

const RenderCard = () => {
  const classes = useStyles();

  const [openModalDishes, setOpenModalDishes] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [dataDishes, setDataDishes] = useState ([]);


  useEffect(() => {
    (async () => {
      const dishes = await axios.get(baseURL);
      setDishes(dishes.data);
    })();
  }, []);
 
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

  const prueba = dish => {
    setDataDishes(dish);
    setOpenModalDishes(true);
  };

  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
      alignContent= "stretch"
      alignItems= "stretch"
    >
      {
        dishes.map((dish) => (
          <Grid item xs={12} sm={6} md={4} key={ dish.id }>
          <motion.div
            variants={cardsVariants} 
            initial="hidden"
            animate="visible"
          >
            <Card className={classes.root} >
              <CardActionArea 
                color="inherit" 
                onClick={()=>prueba(dish)}
              >
              <CardHeader
                title={ dish.name } 
              />
                <CardMedia
                  className={classes.media}
                  image={ dish.picture }
                  title={ dish.name }
                  alt={ dish.name }
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" align = "justify">
                  { dish.description }
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Typography className={classes.price} color="textSecondary" >
                  PRECIO: { dish.price } ARS 
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<AddShoppingCartIcon />}
                  aria-label="Añadir al carrito"
                  className={classes.cartButton}
                  color="secondary"
                >
                  Añadir
                </Button>
              </CardActions>
            </Card>
          </motion.div>
          </Grid>
        ))
      }
      <ModalDishes
        title = {basics.title}
        dataDishes={dataDishes}
        openModalDishes={openModalDishes}
        setOpenModalDishes={setOpenModalDishes}
      />
    </Grid>
  );
}

export default RenderCard;