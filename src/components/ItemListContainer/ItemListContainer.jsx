import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import llamarProductos from './llamarProductos';



const ItemListContainer = () => {
    const [categoria, setCategoria] = useState("");

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        llamarProductos()
            .then((res) => {
                setProductos(res);
            }
        )
    }, []);

    return (
        <div>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer