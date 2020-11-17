import React from "react";
import { Route, Switch } from 'react-router-dom';
function Footer() {
  return <Switch>
    <Route path='/404' exact/>
    <Route path='*'>
      <footer className="footer">
        <p className="footer__text">&copy; 2020 Mesto Russia</p>
      </footer>
    </Route>
  </Switch>
}
export default Footer;
