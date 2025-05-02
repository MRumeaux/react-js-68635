import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <div>
            {productos.map((e) => <Item 
                                    key={e.id} 
                                    titulo={e.titulo} 
                                    img={e.img}
                                    descripcion={e.descripcion} 
                                    precio={e.precio}
                                    id={e.id}
                                    />
                            )
            }
        </div>
    )
}

export default ItemList