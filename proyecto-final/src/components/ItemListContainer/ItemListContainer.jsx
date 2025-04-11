import React, { useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [categoria, setCategoria] = useState("");
    const productos = [
        {
            id: 1,
            titulo: "prod1",
            descripcion: "primer producto",
            precio: 100
        },
        {
            id: 2,
            titulo: "prod2",
            descripcion: "segundo producto",
            precio: 200
        },
        {
            id: 3,
            titulo: "prod3",
            descripcion: "tercer producto",
            precio: 1000
        },
        {
            id: 4,
            titulo: "prod4",
            descripcion: "cuarto producto",
            precio: 500
        },
        {
            id: 5,
            titulo: "prod5",
            descripcion: "quinto producto",
            precio: 50
        }
    ]
    return (
        <ItemList productos={productos}/>
    )
}

export default ItemListContainer