import React from 'react';
import NavSite from './NavBar';
import { CartWidget } from '../cargarImports';


export const Header = () => {
  return (
    <div>
      <NavSite/>
      <CartWidget/>
    </div>
  );
};

export default Header;