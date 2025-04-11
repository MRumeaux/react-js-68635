import React from 'react'
import { Boton } from '../cargarImports';

export const CartWidget = () => {

    const [count, setCount] = useState(0);

    const aumentar = () => {
        setCount(count + 1)
    };

    const restar = () => {
        if(count - 1 >= 0) setCount(count-1)
    };

    return (
        <div>
            <h1>🛒{count}</h1>
            <Boton label={"Aumentar cantidad"} type="success" onClick={aumentar}/>
            <Boton label={"Restar cantidad"} type="danger" onClick={restar}/>
        </div>
    )
}
