import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  padding: 2%;
`;
const Title = styled.h2`
  font-size: 2rem;
  color: antiquewhite;
`;
const P = styled.p`
  color: antiquewhite;
  letter-spacing: 0.1rem;
  margin-top: 1%;
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 5% 10% 5%;
`;
const About = () => {
  return (
    <Container>
      <Title>La Otra junta</Title>
      <TextContainer>
        <P>
          Somos un grupo folclórico formado a finales del 2015, influenciado por
          la nueva camada de la música popular argentina, provenientes de
          diferentes estilos musicales, buscando una fusión de estos estilos con
          el folclore como base.
        </P>

        <P>
          Hace varios años que venimos presentándonos en diferentes escenarios
          del interior de la provincia de Buenos Aires: Ascensión, Salto, Junín,
          Luján, Chivilcoy, Bragado, Pergamino, Gral. Villegas, Capital Federal,
          La Plata, Etc. y en la mayoría de las peñas del noroeste bonaerense.
        </P>

        <P>
          En 2019 participamos del los espectáculos callejeros del Festival de
          Cosquín, además de tocar en las peñas más importantes; La fiesta del
          violinero, La Salamanca, el fogón Criollo oficial de Cosquín, entre
          otras más.
        </P>
        <P>
          Actualmente, La Otra Junta está conformada por: Nicolás Cavaglia
          (Guitarra y Voz) Paulo Mocse (Bajo y Voz), Néstor Toscanini (Bateria),
          Facundo Sorba (Guitarra), Bernabé Suarez( Guitarra y Violín).
        </P>
      </TextContainer>
    </Container>
  );
};

export default About;
