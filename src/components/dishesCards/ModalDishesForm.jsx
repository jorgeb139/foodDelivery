import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { 
    Button,
    Typography,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    container:{
        marginRight: "-45px",
    },
    button:{
        paddingTop:"20px",
    },
  }));

const ModalDishesForm = (props) => {
    const { dataDishes } = props;
    const [dish, setDish] = useState ([]); 
    const classes = useStyles ();
        
    useEffect(() => {
        setDish({
            ...dataDishes
        });
    }, [dataDishes]);

    return (
    <div className = {classes.container}>
        <div aling="center">
            <h2>
                { dish.name }
            </h2>
        </div>
        <div>
            <div>
                <Typography variant="body2" color="textSecondary" paragraph align = "justify">
                    { dish.description }
                </Typography>
                <Typography className={classes.price} color="textSecondary" >
                    PRECIO: {dish.price} ARS 
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
    </div>
    )
}

export default ModalDishesForm;
