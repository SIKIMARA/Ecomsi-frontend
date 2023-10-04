import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ children }) => {
  const history = useNavigate();
  //get path from url
  const path = window.location.pathname;

  useEffect(() => {
    
    checkAuthentication();
  });

  const checkAuthentication = async () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    try {
      const response = await fetch(`http://${process.env.REACT_APP_API_HOST}/auth/validate?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200 ) { 
        if(role === "ADMIN"){
            history('/admin');
        }
        else if(role === "USER"){
            history('/shop');
        }
              
      }
    } catch (error) {   
        history('/signin');
     }
  };

  return children;
};

export default User;