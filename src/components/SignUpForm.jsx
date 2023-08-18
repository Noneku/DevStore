import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignUpForm = () => {

  const handleSubmit = ({setSubmitting}) => {

    setSubmitting(false);
  }

  const validationSchema = Yup.object().shape(
    {
      nom: Yup.string()
      .min(4, "Please enter a name more than 1 character")
      .required('Le nom est requis')
    })
  

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <Formik
        initialValues={
          {
            nom: '',
          }
        }
        validationSchema={validationSchema}
        onSubmit={handleSubmit}

      >  
        {() => (
          <form onSubmit={ handleSubmit } className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Field component={Input} name="nom" size="lg" label="Nom" className="input" />
            <ErrorMessage component="span" name="nom" className="text-red-500"/>
            <Field component={Input} size="lg" label="Prénom" />
            <Field component={Input} size="lg" label="Pseudo Utilisateur" />
            <Field component={Input} size="lg" label="Email" />
            <Field component={Input} type="password" size="lg" label="Password" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type= "submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
        )
      }
      </Formik>     
    </Card>
)};

export default SignUpForm;
