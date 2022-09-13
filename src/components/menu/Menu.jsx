import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #a6a7ab;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  min-height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.7s ease-in-out;
  z-index: 50;
  @media (max-width: 700px) {
    width: 100%;
    min-height: 100vh;
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  }

  a {
    font-size: 1.8rem;
    text-transform: uppercase;
    font-family: "Tweaky";
    letter-spacing: 0.5rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.4rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 700px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #d30000;
      transform: scale(1.1);
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link onClick={() => setOpen(!open)} to="/">
        Inicio
      </Link>
      <Link onClick={() => setOpen(!open)} to="/about">
        Bio
      </Link>
      <Link onClick={() => setOpen(!open)} to="/gallery">
        Galeria
      </Link>
      <Link onClick={() => setOpen(!open)} to="/listen">
        Escuchanos
      </Link>
      <Link onClick={() => setOpen(!open)} to="/contact">
        Contacto
      </Link>
    </StyledMenu>
  );
};

export default Menu;
