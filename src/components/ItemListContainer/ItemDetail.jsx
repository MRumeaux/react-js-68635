
const ItemDetail = ({producto}) => {

    console.log(producto)

    return (
        <div>
            <h2>{producto.nombre_producto}</h2>
            <img src={producto.img} alt={producto.nombre_producto} />
            <p> Descripción del producto: {producto.descripcion} </p>
            <p> Marca: {producto.marca} </p>
            <p> Categoría: {producto.categoria} </p>
        </div>
    )
}

export default ItemDetail