import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { llamarProductos } from './llamarProductos';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    console.log(categoria);

    useEffect(() => {
        llamarProductos()
            .then((res) => {
                setProductos(res)
            })
    },[])

    return (
        <div>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer