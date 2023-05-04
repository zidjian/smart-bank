import React from "react";
import themeOff from '../../assets/images/themeOff.svg';
import themeOn from '../../assets/images/themeOn.svg';

import { Icono } from "../UI";
import styled from "styled-components";

const BotonSwitcher = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

export function SwitcherTheme({colorTheme, cambiarTema}) {
    return (
        <BotonSwitcher onClick={cambiarTema} >
            <Icono src={colorTheme ? themeOff : themeOn} />
        </BotonSwitcher>
    );
}