import data from '../../data/datos.json';


export const llamarProductos = () => {
    return new Promise ((resolve, reject) => {
        resolve(data)
    })
};

export const llamarProdsPorId = (id) => {
    return new Promise ((resolve, reject) => {
        const prodBuscado = data.find((producto) => producto.id === id);

        if(prodBuscado){
            resolve(prodBuscado)
        }
        else{
            reject(
                {
                    error: "Articulo no listado"
                })
        }

    })
}
