import React from 'react';
import { CartWidget } from '../cargarImports';

const NavSite = () => {
    return (
        <>
            <nav className="nav-contenedor">
                <a className="nav-logo" href="#"><h1>Ama tu piel</h1></a>
                <ul>
                    <li><a className="navbar" href="#corporal">Corporal</a></li>
                    <li><a className="navbar" href="#marcas">Marcas</a></li>
                    <li><a className="navbar" href="#tips">Tips</a></li>
                    <li><a className="navbar" href="facial">Facial</a></li>
                </ul>
                <CartWidget/>
            </nav>
        </>
    );
};

export default NavSite;