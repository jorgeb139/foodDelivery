import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  CardActionArea, 
  Card, CardHeader, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  Button,
  TextField,
  Modal
  } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Grid } from "@material-ui/core";
import axios from "axios";
import { motion } from "framer-motion";

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
    paddingLeft: "40px",
    paddingRight: "40px",
    marginTop: "20px"
  },
  modal:{
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3,4),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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

  const body=(
      <div className="modal">
          <div aling="center">
              <h2>
                  MI MODAL
              </h2>
          </div>
          <TextField label= "{modalTittle}" className="text" />
          <br/>
          <TextField label= "{modalDescription}" className="text" />
          <br/>
          <TextField label= "{modalPrice}" className="text" />
          <br/>
          <div align = "right" >
              <Button color="primary">Enviar</Button>
              <Button>Cancelar</Button>
          </div>
      </div>
  );

const baseURL = "dishes.json";

const RenderCard = () => {
  const classes = useStyles();

  const [dishes, setDishes] = useState([]);
  let [isToggled, setToggled] = useState(false)

  useEffect(() => {
    (async () => {
      const dishes = await axios.get(baseURL);
      setDishes(dishes.data);
    })();
  }, []);

  useEffect(() => {
    prueba();
  }, [isToggled])
  
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
  //   ModalDishes(true, "Titulo", "Descripción", "Precio");
  //   setToogled = (prevValue => !prevValue)
  return (
    <ModalDishes isToggled={isToggled} setToggled = {setToggled}>
          {body}
    </ModalDishes>
  )
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
          <motion.div
            variants={cardsVariants} 
            initial="hidden"
            animate="visible"
          >
            <Card className={classes.root} >
              <CardActionArea 
                color="inherit" 
                //onClick={()=>prueba()}
                onClick={()=> setToggled = (true)}
              >
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
                  PRECIO: { dishes.price } ARS 
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
      <ModalDishes isToggled={isToggled} setToggled = {setToggled}>
        {body}
      </ModalDishes>
        {/* <Modal isToggled={isToggled} setToogled = {setToogled}>
          {body}
        </Modal> */}

    </Grid>
  );
}

export default RenderCard;