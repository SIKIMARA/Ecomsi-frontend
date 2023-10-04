import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Authenticated = ({ children }) => {
  const history = useNavigate();
  //get path from url
  const path = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (!token || !role) {
      history('/signin');
    } else {
      checkAuthentication();
    }
  });

  const checkAuthentication = async () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    try {
      const response = await fetch(`http:///${process.env.REACT_APP_API_HOST}/auth/validate?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200 ) { 
              
      }
    } catch (error) {   
        history('/signin');
     }
  };

  return children;
};

export default Authenticated;