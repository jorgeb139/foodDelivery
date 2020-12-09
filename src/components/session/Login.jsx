import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { 
  Button, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  makeStyles 
} from "@material-ui/core";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers";
import { useForm} from "react-hook-form";

import { setSnackbar } from "../../redux/ducks/snackbar";
import { verifyLogin } from "../../redux/ducks/verifyLogin";
import ValidationSchema from "../../services/validationSchema";

const baseURL = process.env.REACT_APP_LOGIN_API_POST;

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2,3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    marginBottom: "30px",
    margin: theme.spacing(3, 0, 2),
    color: "black",
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
    setPersonal({
      ...personal,
      [e.target.name] : e.target.value,
    })
  }
  
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(ValidationSchema),
    mode: "onChange",
  });

  var prueba ={
    email: "string de un mail22",
    password: "string de clave2"
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(baseURL, prueba);
      dispatch(setSnackbar(true,"success","¡Inicio de sesión exitoso!"));
      dispatch(verifyLogin(true));
    } catch (error) {
      const postMessage = error.response.data.message;
      dispatch(setSnackbar(true,"error",postMessage));
    }
  };

  return (
    <>
        <div className={classes.paper}>
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
              color="secondary"
              className={classes.submit}
            >
              Ingresa ya
            </Button>
          </form>
        </div>
    </>
  );
};

export default Login;