import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './login-form.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      console.log(data)
      if (data) {
        setErrors(data)
      }
    }else{
      setErrors(['Your passwords do not match.'])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp} className="loginForm">
      <div className="loginDiv">
        {errors.map((error, ind) => (
          <div key={ind} className="loginDivContent validationDiv">{error}</div>
        ))}
        <label className="loginDivContent">User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          className="loginDivContent inputField"
        ></input>
        <label className="loginDivContent">Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          className="loginDivContent inputField"
        ></input>
        <label className="loginDivContent">Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          className="loginDivContent inputField"
        ></input>
        <label className="loginDivContent">Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          className="loginDivContent inputField"
        ></input>
        <button type='submit' className="loginButton loginDivContent">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
