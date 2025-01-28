import './App.css';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import TotalPrice from './components/TotalPrice';


function App() { 

  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <h1>Order Page</h1>
            <AddProduct />
            <ProductList />
            <TotalPrice />
      </div>
    </ div>
  );
}

export default App;
