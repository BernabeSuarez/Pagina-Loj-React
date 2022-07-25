import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #a6a7ab;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.7s ease-in-out;
  z-index: 50;
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Tweaky";
    letter-spacing: 0.5rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #d30000;
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
    </StyledMenu>
  );
};

export default Menu;
