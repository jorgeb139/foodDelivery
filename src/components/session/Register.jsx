import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { 
  Button, 
  CssBaseline, 
  TextField, 
  Grid, 
  makeStyles,
  Container,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers';
import { useForm} from "react-hook-form";
import axios from "axios";

import { setSnackbar } from "../../redux/ducks/snackbar";
import ValidationSchema from "../../services/validationSchema";

const baseURL = process.env.REACT_APP_REGISTER_API_POST;

const useStyles = makeStyles (( theme ) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "black",
  },
}));

const Register = () => {

  const dispatch = useDispatch();
  const classes = useStyles();

  const [personal, setPersonal] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    password:'',
    passwordConfirmation:'',
    fullName:'',
  });

  const handleInputChange = (e) => {
    setPersonal ({
      ...personal,
      fullName: (personal.firstName + ' ' + personal.lastName),
      [e.target.name] : e.target.value,
    })
  };
  
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(ValidationSchema),
    mode: "onChange",
  });

  var prueba ={
    email: "string de un mail4",
    fullName:"string de un mail4",
    phone: "string de numero4",
    password: "string de clave4"
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(baseURL, prueba);

      dispatch(setSnackbar(true,"success","¡Cuenta creada con éxito!"));
    } catch (error) {
      const postMessage = error.response.data.message;
      dispatch(setSnackbar(true,"error",postMessage));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}> 
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                type="text"
                onChange={handleInputChange}
                inputRef={register}
                error ={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ''}
              />
            </Grid>
            { <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
                type="text"
                onChange={handleInputChange}
                inputRef={register}
                error ={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ''}
              />
            </Grid>}
            {<Grid item xs={12}>
              <TextField
                autoComplete="phone"
                name="phone"
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Teléfono"
                onChange={handleInputChange}
                inputRef={register}
                error ={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ''}
              />
            </Grid>}
            {<Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                type="text"
                onChange={handleInputChange}
                inputRef={register}
                error ={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            </Grid>}
            {<Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
                inputRef={register}
                error ={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
              />
            </Grid>}
            {<Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirmation"
                label="Reingresa contraseña"
                type="password"
                id="passwordConfirmation"
                autoComplete="current-password"
                onChange={handleInputChange}
                inputRef={register}
                error ={!!errors.passwordConfirmation}
                helperText={errors.passwordConfirmation? errors.passwordConfirmation.message : ''}
              />
            </Grid>}
          </Grid>
          <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Quiero enterarme de las promociones"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Registrate
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Register;