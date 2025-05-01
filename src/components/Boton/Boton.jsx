import React from 'react';
import { Button } from 'react-bootstrap';


export const Boton = ({label, type, onClick}) => {
    return (
        <Button variant={type} onClick={onClick}>{label}</Button>
    );
};

export default Boton;