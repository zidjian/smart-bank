import React from "react";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components";

const Btn = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background-color: ${(props) => props.primario ? "transparent" : "white" };
  color: ${(props) => props.primario ? "white" : "#41d3be" };
`;

const Cabecera = styled.div`
  background-color: ${({theme}) => theme.primero};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Header = () => {
  return (
    <Cabecera>
      <Logo className="imagen-logo" src={logo} alt="Logo Smart Bank" />
      <div>
        <Btn href="https://google.com">
          Ayuda
        </Btn>
        <Btn primario href="https://google.com">
          Salir
        </Btn>
      </div>
    </Cabecera>
  );
};

export default Header;
