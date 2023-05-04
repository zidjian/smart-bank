import React from "react";

import Title from "../Title";
import Account from "../Account";
import styled from "styled-components";
import { List } from "../List";

const Contenedor = styled.div`
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <Contenedor>
      <Title>Smart Bank</Title>
      <Section>
        <Account />
        <List />
      </Section>
    </Contenedor>
  );
};

export default Container;
