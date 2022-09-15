import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

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

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Campo necesario";
  } else if (values.name.length < 8) {
    errors.name = "Ingresa tu nombre";
  }

  if (!values.email) {
    errors.email = "Campo necesario";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Ingrese un mail valido";
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      try {
        const docRef = addDoc(collection(db, "Contact Form"), {
          to: values.email,
          message: {
            subject: values.name,
            text: values.message,
          },
        });
        console.log(docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  });
  return (
    <>
      <Title>Contacto</Title>
      <H3>236-4511643</H3>
      <H3>Dejanos tu mensaje</H3>
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Nombre"
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <textarea
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Tu mensaje"
          />
          <button type="submit">Enviar</button>
        </form>
      </FormContainer>
    </>
  );
};
export default Contact;
