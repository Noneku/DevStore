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
import axios from "axios";
import { Link } from "react-router-dom";

const SignUpForm = () => {

const validationSchema = Yup.object().shape({
  nom: Yup.string()
    .min(1, "Veuillez entrer un nom contenant plus de 1 caractères")
    .required("Le nom est requis"),

  prenom: Yup.string()
    .min(1, "Veuillez entrer un prénom contenant plus de 1 caractère")
    .required("Le prénom est requis"),

  pseudo: Yup.string()
    .min(1, "Veuillez entrer un pseudo contenant plus de 1 caractère")
    .required("Le pseudo est requis"),

  email: Yup.string()
    .email("Email invalide")
    .required("L'email est requis"),

  password: Yup.string()
    .min(5, "Veuillez entrer un mot de passe contenant plus de 5 caractères")
    .required("Le mot de passe est requis"),

    ville: Yup.string()
    .min(1, "Veuillez entrer une ville correct")
    .required("La ville est requise"),

    rue: Yup.string()
    .min(1, "Veuillez entrer une rue correct")
    .required("La rue est requise"),

    numero: Yup.number()
    .min(1, "Veuillez entrer un numero d'adresse correct")
    .required("Votre numero d'adresse est requis"),

    codePostal: Yup.string()
    .min(1, "Veuillez entrer un code postal correct")
    .required("Le code postal est requis"),

    agreeTerms: Yup.bool()
    .oneOf([true],'Vous devez accepter les conditions générals'),
});

const initialValues = {
  nom: '',
  prenom: '',
  pseudo: '',
  email: '',
  password: '',
  ville: '',
  rue: '',
  numero: '',
  codePostal: '',
  agreeTerms: false,
};
// AXIOS POST

const handleSubmit = async (values) => {

  try {
    const res = await axios.post('https://fakestoreapi.com/users', { values });
    console.log(res.data);
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
  }
}

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        S'inscrire
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Entrez vos détails pour vous inscrire.
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Field type="text" name="nom">
                {({ field }) => (
                  <Input {...field} size="lg" label="Nom" className="input" />
                )}
              </Field>
              <ErrorMessage name="nom" component="div" className="text-red-500" />

              <Field type="text" name="prenom">
              {({ field }) => (
                  <Input {...field} size="lg" label="Prenom" className="input" />
                )}
                </Field>
              <ErrorMessage name="prenom" component="div" className="text-red-500" />

              <Field type="text" name="pseudo">
              {({ field }) => (
                  <Input {...field} size="lg" label="Pseudo" className="input" />
                )}
                </Field>
              <ErrorMessage name="pseudo" component="div" className="text-red-500" />

              <Field type="text" name="email">
              {({ field }) => (
                  <Input {...field} type="email" size="lg" label="Adresse E-mail" className="input" />
                )}
              </Field>
              <ErrorMessage name="email" component="div" className="text-red-500" />

              <Field type="text" name="password">
              {({ field }) => (
                  <Input {...field} type="password" size="lg" label="Mot de passe" className="input" />
                )}
              </Field>
              <ErrorMessage name="password" component="div" className="text-red-500" />

              {/* ADRESSE */}
              <div className="flex-col">
                <div className="flex space-x-4">
                  <Field type="text" name="ville">
                  {({ field }) => (
                      <Input {...field} type="text" size="lg" label="Ville" className="input"/>
                    )}
                  </Field>
                  <ErrorMessage name="ville" component="div" className="text-red-500" />
                  <Field type="text" name="rue">
                  {({ field }) => (
                      <Input {...field} type="text" size="lg" label="Rue" className="input" />
                    )}
                  </Field>
                  <ErrorMessage name="rue" component="div" className="text-red-500" />
                </div>

                <div className="flex mt-5 space-x-4">
                  <Field type="text" name="numero">
                  {({ field }) => (
                      <Input {...field} type="text" size="lg" label="Numero °" className="input" />
                    )}
                  </Field>
                  <ErrorMessage name="numero" component="div" className="text-red-500" />
                  <Field type="text" name="codePostal">
                  {({ field }) => (
                      <Input {...field} type="text" size="lg" label="Code Postal" className="input" />
                    )}
                  </Field>
                  <ErrorMessage name="codePostal" component="div" className="text-red-500" />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <Field type="checkbox" name="agreeTerms">
                {({ field }) => (
                  <Checkbox {...field}
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
              )} 
              </Field>             
              <ErrorMessage name="agreeTerms" component="div" className="text-red-500" />
            </div>
            <Button type="submit" className="mt-6" fullWidth disabled={isSubmitting}>
              S'inscrire
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Vous avez déjà un compte ?{" "}
              <Link to="/signIn">Se connecter</Link>
              {/* <a href="" className="font-medium text-gray-900">
                Se connecter
              </a> */}
            </Typography>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default SignUpForm;
