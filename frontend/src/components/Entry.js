import React, { useState} from 'react';
import { Link } from 'react-router-dom';

function Entry ({title, link, buttonName, text, linkText, onSubmit}){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleEmailChange = (e) => {
    setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
};
const submitForm = () => {
    onSubmit(password, email);
}
return (
    <form
          className='entry'
          noValidate
        >
        <h2 className='entry__title'>{title}</h2>
          <label className="entry__field">
        <input
          name="email"
          type='email'
          placeholder="Email"
          className="entry__input entry__input_email"
          maxLength="40"
          minLength="2"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <span className="entry__error" id="email-error" />
      </label> 
      <label className="entry__field">
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          className="entry__input entry__input_name"
          maxLength="40"
          minLength="2"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <span className="entry__error" id="password-error" />
      </label>
        <button type='button' className='entry__button' onClick={submitForm}>{buttonName}</button> 
        <p className='entry__text'>{text}<Link className='link' to={link}>{linkText}</Link></p>
        </form>);
}
export default Entry;