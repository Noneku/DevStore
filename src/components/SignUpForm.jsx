import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from 'yup';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignUpForm = () => {

  const handleSubmit = (values, { setSubmitting }) => {
    
    setSubmitting(false);
  }

  const validationSchema = Yup.object().shape(
    {
      nom: Yup.string()
      .min(4, "Veuillez entrer un nom contenant plus de 1 caractère")
      .required('Le nom est requis'),

      prenom: Yup.string()
      .min(4, "Veuillez entrer un prenom contenant plus de 1 caractère")
      .required('Le prenom est requis'),

      pseudo: Yup.string()
      .min(4, "Veuillez entrer un pseudo plus de 1 caractère")
      .required('Le pseudo est requis'),

      email: Yup.string()
      .min(4, "Veuillez entrer un email plus de 1 caractère")
      .required('Adresse mail requise'),

      password: Yup.string()
      .min(4, "Veuillez entrer un mot de passe contenant plus de 1 caractère")
      .required('Le mot de passe est requis'),
    })

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        S'inscrire
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Entrez vos détails pour vous inscrire.
      </Typography>
      <Formik
        initialValues={
          {
            nom: '',
            prenom: '',
            pseudo: '',
            email: '',
            password: ''
          }
        }
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Field component={Input} name="nom" size="lg" label="Nom" className="input" />
                <ErrorMessage name="nom" component="div" className="text-red-500" />
              <Field component={Input} size="lg" label="Prénom" name="prenom" />
                <ErrorMessage name="prenom" component="div" className="text-red-500" />
              <Field component={Input} size="lg" label="Pseudo Utilisateur" name="pseudo" />
                <ErrorMessage name="prenom" component="div" className="text-red-500" />
              <Field component={Input} size="lg" label="Email" name="email" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              <Field component={Input} type="password" size="lg" label="Mot de passe" name="password" />
                <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    J'accepte les
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Conditions Générales
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
                name="agreeTerms"
              />
            </div>
            <Button type="submit" className="mt-6" fullWidth disabled={isSubmitting}>
              S'inscrire
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Vous avez déjà un compte ?{" "}
              <a href="#" className="font-medium text-gray-900">
                Se connecter
              </a>
            </Typography>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default SignUpForm;
