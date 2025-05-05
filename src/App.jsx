
import { Header, Boton, ItemListContainer, CartWidget } from './components/cargarImports';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import Tips from './components/ElementosSitio/Tips';
import Marcas from './components/ElementosSitio/Marcas';
//import './App.css'//


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer productoId={2}/>}></Route>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
        <Route path='/tips' element={<Tips/>}/>
        <Route path='/marcas' element={<Marcas/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
