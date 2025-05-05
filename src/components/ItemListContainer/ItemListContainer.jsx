import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { llamarProductos } from './llamarProductos';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [tituloCategoria, setTituloCategoria] = useState("Productos")

    useEffect(() => {
        llamarProductos()
            .then((res) => {
                setProductos(categoria ? res.filter((producto) => producto.categoria === categoria) : res);
                setTituloCategoria(categoria ? categoria : "Productos");
            })
    },[categoria])

    return (
        <div>
        <ItemList productos={productos} tituloCategoria={tituloCategoria}/>
        </div>
    )
}

export default ItemListContainer