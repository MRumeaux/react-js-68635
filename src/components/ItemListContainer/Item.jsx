import React from 'react';
import {Card} from 'react-bootstrap';
import { Boton } from '../cargarImports';

const Item = ({id, titulo, img, precio}) => {
    return (
        <div>
            <img src={img} alt={titulo} />
            <h2>{titulo}</h2>
            <p>${precio}</p>
            <button onClick={() => { console.log("ID PROD", id) }}>Hacé click para ver más</button>
        </div>
    );
};

export default Item;