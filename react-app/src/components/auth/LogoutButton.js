import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/session';


const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    e.preventDefault()
    await dispatch(logout());
  };

  return <Link onClick={onLogout}>LOGOUT</Link>;
};

export default LogoutButton;
