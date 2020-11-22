import React from 'react';
import Entry from './Entry';
import {ROUTES_MAP} from '../utils/routesMap';

function Login ({onLogin}) {
    const submitForm = (password, email) => {
    onLogin(password, email);
  }
    return(<Entry
        title = 'Вход'
        buttonName= 'Войти'
        text='Ещё не зарегистрированы? '
        link = {ROUTES_MAP.SIGN_UP}
        linkText = 'Зарегистрироваться'
        onSubmit = {submitForm}
    />);
    };
export default Login;