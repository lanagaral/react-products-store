import axios from "axios";
import React from "react";
import './App.css';
import ProductItem from './components/ProductItem';


const baseURL = "https://dummyjson.com/products";

function App() {

  const [pdata, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!pdata) return null;

  var data1 = pdata['products'];

  let itemList = [];
  data1.forEach((item, index) => {
    itemList.push(
    <ProductItem 
        title={item.title} 
        src={item.thumbnail} 
        price={item.price} 
        rating={item.rating} 
        desc={item.description} 
        category={item.category} 
        brand={item.brand} 
        stock={item.stock} />)
  })
  return (

    <div className="App">
      {itemList}
    </div>

  );
}

export default App;
