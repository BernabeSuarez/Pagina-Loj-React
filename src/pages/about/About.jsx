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
          Somos un grupo folclorico formado a finales del 2015, influenciado por
          la nueva camada de la musica popular argentina, provinientes de
          diferentes estilos musicales, buscando una fusion de estos estilos con
          el folclore como base.
        </P>
        <P>
          Hace varios años ya que venimos presentandonos en diferentes
          escenarios del interior de la provincia de Buenos Aires: Ascencion,
          Salto, Junin, Lujan, Chivilcoy, Bragado, Pergamino, Gral. Villegas,
          Capital Federal, La Plata, Etc. y en la mayoria de las peñas del
          noroeste bonaerense.
        </P>
        <P>
          En 2019 participamos del los espectaculos callejeros del Festival de
          Cosquin ademas de tocar en las peñas mas importantes; La fiesta del
          violinero, La Salamanca, el fogon Criollo oficial de Cosquin, entre
          otras mas.
        </P>
        <P>
          Actualmente La Otra Junta esta conformada por: Nicolas Cavaglia
          (Guitarra y Voz) Paulo Mocse (Bajo y Voz), Nestor Toscanini (Bateria),
          Facundo Sorba (Guitarra), Bernabe Suarez( Guitarra y Violin)
        </P>
      </TextContainer>
    </Container>
  );
};

export default About;
