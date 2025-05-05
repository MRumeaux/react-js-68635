import React, { useState } from 'react'
import ItemList from './ItemList'
import data from '../../data/datos.json'


const ItemListContainer = ({greeting}) => {
    const [categoria, setCategoria] = useState("");

    console.log(data);

    const llamarProductos = () => {
        return new Promise ((res, rej) => {
            resolve()
        })
    }
    return (
        <div>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer