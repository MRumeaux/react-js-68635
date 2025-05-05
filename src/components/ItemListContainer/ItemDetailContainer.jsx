import { useEffect, useState } from "react"
import { llamarProdsPorId } from "./llamarProductos";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({productoId}) => {

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        llamarProdsPorId(productoId)
            .then((res) => {
                setProducto(res);
            })
    }, [productoId])
    

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer