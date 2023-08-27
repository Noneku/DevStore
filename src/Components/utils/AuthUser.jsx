import React, { useState, useEffect } from 'react';
import { Typography } from "@material-tailwind/react";

function AuthUser() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const TokenUser = localStorage.getItem('authToken');

  useEffect(() => { 
    TokenUser && setIsAuthenticated(true);

    console.log(isAuthenticated);
  }, [TokenUser, isAuthenticated]); //On passe des dépendance à useEffect car on lui signal que l'état du composant peut changer

  return (
    isAuthenticated ? (
      <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
        Bonjour, <strong className="font-semibold text-gray-900 dark:text-white">tt</strong> 
      </Typography>
    ) 
    : null
  );    
}

export default AuthUser;
