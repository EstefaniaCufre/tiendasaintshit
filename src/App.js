import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemProduct from './components/ItemProduct/ItemProduct';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
    //JSX
    <div className="container">
      <NavBar />
      <div>
        <h1>Saint Shit - Tienda de Stickers</h1>
        <ItemListContainer title='Lista de productos'/>
        <div className='list-products'></div>
        <ItemProduct />
      </div>
    </div>
    
  );
}

export default App;
