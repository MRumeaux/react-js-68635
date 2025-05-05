import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { llamarProductos } from './llamarProductos';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [tituloCategoria, setTituloCategoria] = useState("Productos")

    useEffect(() => {
        llamarProductos()
            .then((res) => {
                if(categoria){
                    setProductos(res.filter((producto) => producto.categoria === categoria));
                    setTituloCategoria(categoria);
                }
                else{
                    setProductos(res);
                    setTituloCategoria("Productos");
                }
            })
    },[categoria])

    return (
        <div>
        <ItemList productos={productos} tituloCategoria={tituloCategoria}/>
        </div>
    )
}

export default ItemListContainer