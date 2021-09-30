import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './login-form.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin} className="loginForm">
      <div className="loginDiv">
        {errors.map((error, ind) => (
          <div key={ind} className="loginDivContent">{error}</div>
        ))}
        <label htmlFor='email' className="loginDivContent">EMAIL</label>
        <input
          name='email'
          type='text'
          placeholder='starman42@galacticmail.com'
          value={email}
          onChange={updateEmail}
          className="inputField loginDivContent"
        />
        <label htmlFor='password' className="loginDivContent">PASSWORD</label>
        <input
          name='password'
          type='password'
          placeholder='Zorg1412!'
          value={password}
          onChange={updatePassword}
          className="inputField loginDivContent"
        />
        <button type='submit' className="loginDivContent loginButton">LOGIN</button>
      </div>
    </form>
  );
};

export default LoginForm;
