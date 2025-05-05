import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({id, titulo, img, precio}) => {
    return (
        <div>
            <img src={img} alt={titulo} />
            <h2>{titulo}</h2>
            <p>${precio}</p>
            <Link to={`/item/${id}`}>Hacé click para ver más</Link>
        </div>
    );
};

export default Item;
