import React from 'react';
import {Card} from 'react-bootstrap';
import { Boton } from '../cargarImports';

const Item = ({id, titulo, descripcion, precio}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>${precio}</Card.Text>
                <Boton type="success" label="Ver más detalles" 
                onClick={() => {
                        console.log("ID PROD", id)
                    }}
                />
            </Card.Body>
            </Card>

        </div>
    );
};

export default Item;