import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 12rem 4rem;
  color: #ebebeb;
  @media (max-width: 576px) {
    padding: 2%;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-family: "Roboto";
  font-weight: 100;
  @media (max-width: 576px) {
    padding: 2%;
    font-size: 1rem;
  }
`;
export const H1 = styled.h1`
  text-align: center;
  font-family: "Tweaky";
  font-size: 8rem;
  font-weight: 200;
  margin-top: 5rem;
  margin-bottom: 10rem;
  @media (max-width: 576px) {
    padding: 2%;
    font-size: 3rem;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  font-family: "Roboto";
  font-style: italic;
  font-weight: 100;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 576px) {
    padding: 2%;
    font-size: 1rem;
  }
`;
export const SocialLink = styled.a`
  text-decoration: none;
  margin-left: 25px;
  color: #ffffff;
  font-size: 2rem;
  transition: 0.5s;
  &:hover {
    color: #f73434c8;
  }
`;