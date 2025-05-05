import React from 'react'
import Item from './Item'

const ItemList = ({productos, tituloCategoria}) => {
    return (
        <div>
            <h2>{tituloCategoria}</h2>
            {productos.map((e) => <Item 
                                    key={e.id} 
                                    titulo={e.titulo} 
                                    img={e.img}
                                    precio={e.precio}
                                    id={e.id}
                                    />
                            )
            }
        </div>
    )
}

export default ItemList