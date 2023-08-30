import React, { useState, useEffect } from 'react';
import { Typography } from "@material-tailwind/react";
import jwtDecode from 'jwt-decode';

function AuthUser() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const TokenUser = localStorage.getItem('authToken');
  let decodedToken = null;

  if(isAuthenticated){
    const token = TokenUser;
    decodedToken = jwtDecode(token);
  }

  useEffect(() => { 
    TokenUser && setIsAuthenticated(true);
  
  }, [TokenUser, isAuthenticated]); //On passe des dépendances à useEffect car on lui signal que l'état du composant peut changer

  return (
    isAuthenticated ? (
      <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
        Bonjour, <strong className="font-semibold text-gray-900 dark:text-white">{decodedToken ? decodedToken.user : null}</strong> 
      </Typography>
    ) 
    : null
  );    
}

export default AuthUser;
