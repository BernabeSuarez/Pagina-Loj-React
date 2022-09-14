import React from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";

const Title = styled.h2`
  color: antiquewhite;
  font-size: 1.5rem;
`;
const FormContainer = styled.div`
  width: 50%;
  background-color: #a6a7ab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  border-radius: 15px;
  input {
    width: 100%;
    margin: 1rem auto 1rem;
    padding: 2%;
    border-radius: 10px;
    border: none;
  }
  textarea {
    width: 100%;
    margin: 1rem auto 1rem;
    padding: 2%;
    border-radius: 10px;
    border: none;
  }
  button {
    width: 80%;
    margin: 1rem auto 1rem;
    padding: 2%;
    border-radius: 10px;
    border: none;
    color: #fff;
    background-color: #3f4044;
  }
  button:hover {
    background-color: #1f7379;
  }
  @media (max-width: 700px) {
    width: 90%;
    padding: 2%;
    input {
      height: 2.5rem;
      margin: 0.5rem auto 0.5rem;
      padding: 1%;
    }
  }
`;
const H3 = styled.h3`
  color: antiquewhite;
  font-size: 1.2rem;
  font-style: oblique;
  font-family: monospace;
  margin-top: 1%;
`;

const Contact = () => {
  return (
    <>
      <Title>Contacto</Title>
      <H3>236-4511643</H3>
      <H3>Dejanos tu mensaje</H3>
      <FormContainer>
        <Formik
          initialValues={{ email: "", nombre: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                type="text"
                name="nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombre}
                placeholder="Nombre"
              />
              <Field
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
              <Field
                as="textarea"
                name="mensaje"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mensaje}
                placeholder="Tu mensaje"
              />
              <button type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};
export default Contact;
