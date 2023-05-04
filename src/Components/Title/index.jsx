import React from "react";
import styled from "styled-components";

const Titulo1 = styled.h1`
  color: ${({theme}) => theme.text};
  padding: 25px 0;
`; 

const Title = ({ children }) => {
  return <Titulo1 >{children}</Titulo1>;
};
export default Title;
