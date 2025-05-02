import React from 'react';
import {Card} from 'react-bootstrap';
import { Boton } from '../cargarImports';

const Item = ({id, titulo, img, descripcion, precio}) => {
    return (
        <div>
            <img src={img} alt={titulo} />
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <button onClick={() => { console.log("ID PROD", id) }}>Hacé click para ver más</button>
        </div>
    );
};

export default Item;