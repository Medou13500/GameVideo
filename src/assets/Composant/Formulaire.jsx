import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

function Formulaire() {
  const Schema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Le nom doit contenir 2 caractères minimum")
      .required("Le nom d'utilisateur est obligatoire"),
    password: Yup.string()
      .min(8, "Le mot de passe doit contenir 8 caractères minimum")
      .matches(/^[A-Z](?=.*\d)(?=.*[@$!%*?&]).*$/, "Le mot de passe doit commencer par une majuscule, contenir un chiffre et un caractère spécial")
      .required("Le mot de passe est obligatoire"),
    email: Yup.string()
      .email("L'adresse email n'est pas valide")
      .matches(/@/, "L'adresse email doit contenir un @")
      .required("L'adresse email est obligatoire"),
    message: Yup.string()
      .min(20, "Le message doit contenir 20 caractères minimum")
      .required("Quelque chose vous tracasse ?"),
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <Formik
        initialValues={{ username: '', password: '', email: '', message: '' }}
        validationSchema={Schema}
        onSubmit={(values) => {
          console.log('Form data', values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
              <Field name="username" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="username" component="div" className="mt-2 text-sm text-red-600" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <Field name="password" type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="password" component="div" className="mt-2 text-sm text-red-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field name="email" type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="email" component="div" className="mt-2 text-sm text-red-600" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Field name="message" as="textarea" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="message" component="div" className="mt-2 text-sm text-red-600" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Soumettre
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Formulaire;
