import './App.css';
import Navbar from './Navbar/Navbar';
import Form from './Form/Form';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';

function App() {
  return (
  <>
    <Navbar/>
    <Form busqueda={"Buscar productos"} />
    <ItemListContainer greeting={"Aqui van los productos"} />
    <ItemCount/>
  </>
  );
}

export default App;
