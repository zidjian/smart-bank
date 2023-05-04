import React from 'react';
import {lista} from '../../info.js';
import { Caja } from '../UI/index.js';
import { Card } from '../Card';

export function List() {
    return (
        <Caja>
            {
                lista.cargos.map((elemento, indice) => {
                    return (
                        <Card key={indice} cargo={elemento} />
                    );
                })
            }
        </Caja>
    );
}