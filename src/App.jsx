import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header, Boton, ItemListContainer, CartWidget } from './components/cargarImports'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer'
//import './App.css'//


function App() {
  let texto = "Hola Coders";

  return (
    <>
    <Header/>
    <ItemListContainer/>
    {<ItemDetailContainer productoId={1}/>}
    </>
  )
}

export default App
