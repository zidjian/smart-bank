import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import styled from "styled-components";
import {Caja, Icono, Saldo, Detalle, Boton, Titulo2, IconoTema} from "../UI";

const IconoMargin = styled(Icono)`
  margin-top: 2px;
`;

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Caja>
      <Titulo2>Cuenta</Titulo2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <IconoTema src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Boton onClick={toggleHandler}>
        <IconoMargin
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Boton>
    </Caja>
  );
};

export default Account;
