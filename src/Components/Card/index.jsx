import React from "react";
import styled from "styled-components";
import { Imagen } from "../../FiltroImage";

const Tarjeta = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    .type {
        font-weight: bold;
    }
`;

export function Card({cargo}) {
    const {type, value, date, from} = cargo;
    return (
        <Tarjeta>
            <Imagen tipo={type} />
            <Info>
                <span>{type}</span>
                <span>{value}</span>
                <span>{date}</span>
            </Info>
            <span>{from}</span>
        </Tarjeta>
    );
}