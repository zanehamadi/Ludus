import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import "./logoutButton.css"


const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    e.preventDefault()
    await dispatch(logout());
  };

  return <span onClick={onLogout} id="logoutButton">LOGOUT</span>;
};

export default LogoutButton;
