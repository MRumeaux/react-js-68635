import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header, Boton, ItemListContainer, CartWidget } from './components/cargarImports'
//import './App.css'//


function App() {
  let texto = "Hola Coders";

  return (
    <>
    <Header/>
    <ItemListContainer/>
    </>
  )
}

export default App
