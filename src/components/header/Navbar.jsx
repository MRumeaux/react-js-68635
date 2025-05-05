import React from 'react';
import { CartWidget } from '../cargarImports';
import { Link } from 'react-router-dom';

const NavSite = () => {
    return (
        <>
            <div className="nav-contenedor">
                <nav className="navbar">
                    <Link className="nav-logo" to="/"><h1>Ama tu piel</h1></Link>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/productos">Nuestros productos</Link></li>
                        <li><Link to="/productos/corporal">Productos Corporales</Link></li>
                        <li><Link to="/productos/facial">Productos Faciales</Link></li>
                        <li><Link to="/marcas">Marcas</Link></li>
                        <li><Link to="/tips">Tips</Link></li>
                    </ul>
                    <CartWidget/>
                </nav>
            </div>
        </>
    );
};
export default NavSite;