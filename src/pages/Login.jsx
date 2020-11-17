import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, CssBaseline, Paper, Avatar, Typography, TextField, FormControlLabel, Checkbox, makeStyles } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from "axios";
import { yupResolver } from "@hookform/resolvers";
import { useForm} from "react-hook-form";

import { setSnackbar } from "../redux/ducks/snackbar";
import { verifyLogin } from "../redux/ducks/verifyLogin";
import ValidationSchema from "../services/validationSchema";

const baseURL = "https://cors-anywhere.herokuapp.com/https://1nv8v8ngo5.execute-api.us-east-1.amazonaws.com/dev/signin";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {

  const dispatch = useDispatch();
  const classes = useStyles();

  const [personal, setPersonal] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setPersonal({
      ...personal,
      [e.target.name] : e.target.value,
    })
  }
  
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(ValidationSchema),
    mode: "onChange",
  });

  // var prueba ={
  //   email: "emailasasaa14",
  //   password: "aaaddddsa14"
  // };

  const onSubmit = async () => {
    try {
      const res = await axios.post(baseURL, personal);
      dispatch(setSnackbar(true,"success","¡Inicio de sesión exitoso!"));
      dispatch(verifyLogin(true));
    } catch (error) {
      const postMessage = error.response.data.message;
      dispatch(setSnackbar(true,"error",postMessage));
    }
  };

  return (
    <>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresa
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={register}
              error ={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={register}
              error ={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
              onChange={handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Ingresa ya
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
    </>
  );
};

export default Login;