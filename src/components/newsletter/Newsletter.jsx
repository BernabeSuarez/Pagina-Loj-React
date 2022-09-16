import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const NewsContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  color: white;
  backdrop-filter: blur(2px);
`;

const NewsBody = styled.div`
  width: 100%;
  height: 50%;
  margin: auto;
  padding: 3% 0;
  //background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  @media (max-width: 768px) {
    padding: 1%;
    margin: 1%;
  }
`;
const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & form {
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
const InputNews = styled.input`
  width: 30rem;
  height: 2.5rem;
  padding: 2%;
  background-color: #e0dede;
  border-radius: 10px;
  margin: 2% 0.5%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const InputButton = styled(InputNews)`
  width: 15rem;
  padding: 0;
  color: white;
  background-color: #474646;
  &:hover {
    background-color: #16d0ff;
  }
`;

const notify = () => toast.success("Gracias por suscribirte!"); //abre el toast

const NewsLetter = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  console.log(phoneNumber);
  const SendNumber = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Whatsapp List"), {
        Tel: phoneNumber,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    notify();
  };

  return (
    <NewsContainer>
      <Toaster position="top-center" reverseOrder={false} />
      <NewsBody>
        <h3>
          <span role="img" aria-label="guitar">
            🎸
          </span>
          Suscribite a nuestro Whatsapp de difusion
          <span role="img" aria-label="guitar">
            🎸
          </span>
        </h3>
        <p>Mantenete al tanto de todas las novedades, peñas y demas!!! </p>
        <FormContainer>
          <form onSubmit={SendNumber}>
            <InputNews
              type="text"
              placeholder="Tu Telefono"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <InputButton type="submit" value="Enviar" />
          </form>
        </FormContainer>
      </NewsBody>
    </NewsContainer>
  );
};

export default NewsLetter;
