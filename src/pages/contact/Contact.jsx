import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { BsWhatsapp } from "react-icons/bs";
import Toast from "../../utils/toast/Toast";

const ContactContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 90vh;
  }
`;
const Title = styled.h2`
  font-family: "Tweaky";
  color: antiquewhite;
  font-size: 3.2rem;
`;

const Error = styled.h3`
  min-width: 0.8rem;
  color: red;
  font-size: 0.8rem;
  font-style: italic;
`;
const FormContainer = styled.div`
  width: 50%;
  height: auto;
  background-color: #a6a7ab;
  margin: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  form {
    width: 100%;
  }
  textarea {
    width: 80%;
    min-height: 4rem;
    padding: 12px 20px;
    margin: 2% 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      width: 90%;
    }
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
    width: 95%;
    padding: 2%;
    border-radius: 10px;
    textarea {
      height: 2.9rem;
      padding: 2%;
    }
    button {
      width: 90%;
    }
  }
`;

const Input = styled.input`
  width: 80%;
  padding: 12px 20px;
  margin: 2% 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    border: none;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
  ${(
    { showError } //Colorea el input si existe un error
  ) =>
    showError
      ? `
          border: 2px solid  red;
        `
      : null}
`;

const WhatsappIcon = styled(BsWhatsapp)`
  position: fixed;
  color: #39d30b;
  font-size: 4rem;
  right: 55px;
  bottom: 50px;
  z-index: 100;
  filter: drop-shadow(0px 2px 11px #000000);
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 4rem;
    position: static;
    margin: auto;
  }
`;
const WhatsappTitle = styled.h5`
  color: white;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
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
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      try {
        const docRef = addDoc(collection(db, "Contact Form"), {
          to: "laotrajuntafolklore@gmail.com",
          message: {
            subject: values.email,
            text: values.message,
          },
        });
        console.log(docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setOpen(true);
    },
  });

  return (
    <ContactContainer>
      <div>
        <Toast
          message="Tu mensaje fue enviado!"
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </div>
      <Title>Contacto</Title>

      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Nombre"
            showError={formik.errors.name}
          />
          {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}

          <Input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
            showError={formik.errors.email}
          />
          {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}

          <textarea
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Tu mensaje"
          />
          <button type="submit">Enviar</button>
        </form>
      </FormContainer>
      <WhatsappTitle>Enviar Whatsapp</WhatsappTitle>
      <a href="https://wa.me/2364511643">
        <WhatsappIcon />
      </a>
    </ContactContainer>
  );
};
export default Contact;
