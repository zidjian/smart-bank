import React from "react";
import { IconoTema } from "./Components/UI";
import Restaurante from "./assets/images/alimentacion.svg"
import Utilidades from "./assets/images/utilidades.svg"
import Salud from "./assets/images/transporte.svg"
import Transporte from "./assets/images/transporte.svg"
import Otro from "./assets/images/otros.svg"


export function Imagen({tipo}) {
    switch (tipo) {
        case 'Restaurante':
            return <IconoTema src={Restaurante} />
    
        case 'Utilidades':
            return <IconoTema src={Utilidades} />

        case 'Salud':
            return <IconoTema src={Salud} />

        case 'Transporte':
            return <IconoTema src={Transporte} />

        default:
            return <IconoTema src={Otro} />
    }
}