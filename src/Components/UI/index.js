import styled from "styled-components";


export const Icono = styled.img`
    height: 25px;
    width: 25px;
    color: ${({theme}) => theme.text};
`;

export const IconoTema = styled(Icono)`
    filter: ${({theme}) => theme.filtro};
`;

export const Caja = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme}) => theme.inisde};
  color: ${({theme}) => theme.text};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: ${({theme}) => theme.text};
`;

export const Detalle = styled.span`
  color: ${({theme}) => theme.primero};
  font-size: 24px;
`;

export const Boton = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: ${({theme}) => theme.primero};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: ${({theme}) => theme.inside};
`;

export const Titulo2 = styled.h2`
  color: ${({theme}) => theme.text};
`;