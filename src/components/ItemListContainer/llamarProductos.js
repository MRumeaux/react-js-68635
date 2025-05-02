import data from '../../data/datos.json';


const llamarProductos = () => {
    return new Promise ((resolve, reject) => {
        resolve(data)
    })
};

export default llamarProductos;