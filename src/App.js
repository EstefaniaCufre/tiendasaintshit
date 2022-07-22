import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemProduct from './components/ItemProduct/ItemProduct';

function App() {
  
  return (
    //JSX
    <div className="container">
      <NavBar />
      <div>
        <h1>Saint Shit - Tienda de Stickers</h1>
        <div className='list-products'></div>
        <ItemProduct />
      </div>
    </div>
    
  );
}

export default App;
