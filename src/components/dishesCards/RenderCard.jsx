import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography , IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import axios from "axios";
import dishes from "../../assets/dummyData/dishes.json";
import { Grid } from "@material-ui/core";

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

const RecipeReviewCard = () => {
  const classes = useStyles();
 
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      {
        dishes.map((dishes) => (
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardHeader
              title={ dishes.name }
            />
            <CardMedia
              className={classes.media}
              image={ dishes.picture }
              title={ dishes.name }
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" align = "justify">
                `{ dishes.description }`
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
                PRECIO: { dishes.price }
              </Typography>
            </CardActions>
          </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}

export default RecipeReviewCard;