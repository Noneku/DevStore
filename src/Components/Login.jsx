import React, {useEffect, useState, Redirect} from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigation } from 'react-router-dom'; 

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
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <label className={styles.label} htmlFor='username'>
                Username
              </label>
              <Field className={styles.field} id='username' name='username' />
              <ErrorMessage component='a' className={styles.errorMsg} name='username' />
    
              <label className={styles.label} htmlFor='password'>
                Password
              </label>
              <Field className={styles.field} id='password' name='password' type="password" />
              <ErrorMessage component='a' className={styles.errorMsg} name='password' />
    
              <div className='mt-8'>
                <button type='submit' className={styles.button}>
                  Login
                </button>
              </div>
    
              {/* Lien pour la réinitialisation du mot de passe */}
              <div className="mt-4">
                <button 
                  type="button" 
                  className={styles.forgotPassword}
                  onClick={() => handleForgotPassword(values.username)}
                >
                  Forgot Password?
                </button>
              </div>
    
            </Form>
          )}
        </Formik>
      );
    }
 

  export default Login;