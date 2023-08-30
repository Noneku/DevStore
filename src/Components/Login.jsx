import React, {useEffect, useState, Redirect} from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigation } from 'react-router-dom'; 
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography, 
} from "@material-tailwind/react";

export const loginSchema = Yup.object().shape({ 
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .min(5, 'Password is too short - should be 5 chars minimum.')
      .required('Password is required'),
  });

  export const Login = ({styles ={
    label: 'text-red-500', 
    field: 'border p-2', 
    errorMsg: 'text-sm text-red-400', 
    button: 'bg-blue-500 p-2 rounded',
    forgotPassword: 'text-blue-500'}
  }) => {
    
    const handleSubmit = async (values) => {
      try {
        const response = await axios.post('https://fakestoreapi.com/auth/login', values);

        if (response.data.token) {
            alert('Logged in successfully');
            localStorage.setItem('authToken', response.data.token);
        } else {
            throw new Error('Login failed');
        }
      } catch (error) {
        alert('Login failed. Please check your credentials.');
      }
    };
  
    const handleForgotPassword = async (username) => {
        if (!username) {
          alert("Please enter your username first.");
          return;
        }
        try {
          await axios.put('https://fakestoreapi.com/users/1', { username: username });
          alert('Password reset request sent. Check your email.');
        } catch (error) {
          alert('Failed to send reset request. Please try again later.');
        }
      };
    
      return (
        <Card color="transparent" shadow={false} className="flex flex-col items-center">
      <Formik
        initialValues={{
          username: '', // Valeurs initiales vides
          password: '',
        }}
        validationSchema={loginSchema} // Utilisation du schéma de validation
        onSubmit={handleSubmit} // Gestionnaire de soumission personnalisé
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 mb-2 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Field type="text" name="username">
                {({ field }) => (
                  <Input
                    {...field}
                    size="lg"
                    label="Username"
                    className={styles.field} // Classe CSS personnalisée
                  />
                )}
              </Field>
              <ErrorMessage name="username" component="div" className={styles.errorMsg} />

              <Field type="password" name="password">
                {({ field }) => (
                  <Input
                    {...field}
                    size="lg"
                    label="Password"
                    type="password"
                    className={styles.field} // Classe CSS personnalisée
                  />
                )}
              </Field>
              <ErrorMessage name="password" component="div" className={styles.errorMsg} />
            </div>
            <Button
              type="submit"
              className="mt6 bg-none" // Classe CSS personnalisée pour le bouton
              fullWidth
              disabled={isSubmitting}
            >
              Se connecter
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleForgotPassword(); // Gérer la logique de mot de passe oublié ici
                }}
              >
                Mot de passe oublié ?
              </a>
            </Typography>
          </Form>
        )}
      </Formik>
    </Card>
);
    }
 

  export default Login;