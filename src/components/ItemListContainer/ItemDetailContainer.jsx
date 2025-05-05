import { useEffect, useState } from "react"
import { llamarProdsPorId } from "./llamarProductos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({productoId}) => {

    const [producto, setProducto] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        llamarProdsPorId(Number(id))
            .then((res) => {
                setProducto(res);
            })
    }, [id])
    

    return (
        <div>
            {producto && <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer