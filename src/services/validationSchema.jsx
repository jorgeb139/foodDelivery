import * as yup from 'yup';

const ValidationSchema = yup.object().shape({
    firstName: yup.string()
      .trim()
      .min(3, 'Debe tener un minimo de 3 caracteres.')
      .max(15, 'Debe tener un máximo de 15 caracteres.')
      .required('Requerido.'),
      lastName: yup.string()
      .trim()
      .min(3, 'Debe tener un minimo de 3 caracteres.')
      .max(15, 'Debe tener un máximo de 15 caracteres.')
      .required('Requerido.'),
      phone: yup.string()
<<<<<<< HEAD
      .trim()
=======
>>>>>>> 04-Modal
      .matches(/[0-9]/, 'Contraseña solo puede contener números.')
      .min(3, 'Debe tener un minimo de 3 números.')
      .max(15, 'Debe tener un máximo de 15 números.')
      .required('Requerido.'),
      email: yup.string()
      .email('Debe ser un email válido.')
      .required('Requerido.'),
      password: yup.string()
      .trim()
      .required('Requerido.') 
      .min(8, 'Contraseña es muy corta - Debe contener al menos 8 caracteres.')
      .max(15, 'Contraseña es muy larga - Debe contener máximo 15 caracteres.')
      .matches(/[a-zA-Z]/, 'Contraseña solo puede contener letras latinas.'),
      passwordConfirmation: yup.string()
      .trim()
      .required('Requerido.') 
      .oneOf([yup.ref('password'), null],"Contraseñas no coinciden")
  });

  export default ValidationSchema;