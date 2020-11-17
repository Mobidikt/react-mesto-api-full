import React from 'react';
import Entry from './Entry';
import {ROUTES_MAP} from '../utils/routesMap';

function Register({onRegister}) {
  const submitForm = (password, email) => {
    onRegister(password, email);
  }

return(
  <Entry
    title = 'Регистрация'
    buttonName= 'Зарегистрироваться'
    text='Уже зарегистрированы? '
    link = {ROUTES_MAP.SIGN_IN}
    linkText = 'Войти'
    onSubmit = {submitForm}
  />);
};

export default Register;