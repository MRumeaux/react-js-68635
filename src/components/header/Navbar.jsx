import React from 'react';
import { CartWidget } from '../cargarImports';

const NavSite = () => {
    return (
        <>
            <div className="nav-contenedor">
                <nav className="navbar">
                    <a className="nav-logo" href="#"><h1>Ama tu piel</h1></a>
                    <ul>
                        <li><a href="#corporal">Corporal</a></li>
                        <li><a href="#marcas">Marcas</a></li>
                        <li><a href="#tips">Tips</a></li>
                        <li><a href="facial">Facial</a></li>
                    </ul>
                    <CartWidget/>
                </nav>
            </div>
        </>
    );
};

export default NavSite;