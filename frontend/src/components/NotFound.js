import React from 'react';
import { Link } from 'react-router-dom';
import {ROUTES_MAP} from '../utils/routesMap';

function NotFound ({login}) {
    return (<div className='notFound'>
        <h1 className='notFound__title' >404</h1> 
        <p className='notFound__text'>Здесь ничего нет. <Link className='link' to={login ? ROUTES_MAP.MAIN : ROUTES_MAP.SIGN_IN}>Вернуться</Link>.</p>
    </div>);
};
export default NotFound;