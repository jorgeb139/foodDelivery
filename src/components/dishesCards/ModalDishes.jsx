import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { red } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import "../principalMenu/Menu.css";
import { Box, Button, Dialog, Grid, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        position: "absolute",
        flexGrow: 1,
        '@media': {
            height: "65%",
        },
        '@media (min-height: 950px)': {
            height: "500px",
        },
        padding:"20px 40px 20px 30px",
    },
    titleContainer:{
        paddingBottom:"5px",
    },
    title:{
        fontSize: "2rem",
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.8rem"
        },
    },
    closeButton: {
        color: theme.palette.getContrastText(red[400]),
        backgroundColor: red[400],
        '&:hover': {
            backgroundColor: red[700],
        },
        height:"36px",
        width: "48px",   
    },
    dividerContainer:{
        paddingBottom:"15px",
    },
    imgContainer: {
        width: "95%",
        height: "190%",
        [theme.breakpoints.down("sm")]: {
            height: "140%",
        },
        [theme.breakpoints.only("xs")]: {
            height: "180px",
            width: "250px",
        },
        '@media (max-height: 750px)': {
            height: "50vh",
        },
        overflow: "hidden",
        position: "relative",
    },
    image: {
        height: "100%",
        [theme.breakpoints.down("sm")]: {
            height: "30%",
            paddingBottom:"20px"
        },
        left: "-100%",
        right: "-100%",
        top: "-100%",
        bottom: "-100%",
        margin: "auto",
        minHeight: "100%",
        position: "absolute"
    },
    price:{
        paddingBottom:"15px",
        fontSize:"1.1rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
    },
}));

const ModalDishes = (props) => {
    const classes = useStyles();
    const {title, dataDishes, openModalDishes, setOpenModalDishes} = props;
    const [dish, setDish] = useState ([]); 

    useEffect(() => {
        setDish({
            ...dataDishes
        });
    }, [dataDishes]);

    return (
        <Dialog 
            open = {openModalDishes}
            maxWidth = "md"
            classes = {{ paper: classes.container }}
        >
            <div>
                <Grid container>
                    <Grid item xs={12} className={classes.dividerContainer}>
                        <div style={{display:"flex"}} className={classes.titleContainer}>
                            <Typography component="div" className={`${classes.title} title`} style = {{ flexGrow: 1 }}>
                                { title }
                            </Typography>
                            <Button variant="contained" className={classes.closeButton} onClick={()=>{setOpenModalDishes(false)}}>
                                <CloseIcon/>
                            </Button>
                        </div>
                        <Divider variant="fullWidth"/>
                    </Grid>
                    <Grid item xs={12} sm={7} align="center">
                        <Box className={classes.imgContainer}>
                            <img src={ dish.picture } className={classes.image} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5} className={classes.description}>
                        <Box className={classes.ppal}>
                            <div aling="center">
                                <Typography variant="h5" paragraph align = "justify">
                                    { dish.name }
                                </Typography>
                            </div>
                            <div>
                                <div>
                                    <Typography variant="body2" color="textSecondary" paragraph align = "justify">
                                        { dish.description }
                                    </Typography>
                                    <Typography className={classes.price} color="textSecondary" >
                                        <strong>PRECIO: {dish.price} ARS</strong> 
                                    </Typography>
                                </div>
                                <div align = "right" className = {classes.button}>
                                    <Button
                                        variant="contained"
                                        endIcon={<AddShoppingCartIcon />}
                                        aria-label="Añadir al carrito"
                                        className={classes.cartButton}
                                        color="secondary"
                                        fullWidth={true}
                                    >
                                        Añadir al carrito
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Dialog>
    );
};

export default ModalDishes;