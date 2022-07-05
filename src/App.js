
import './App.css';
import ProductItem from './components/ProductItem';
import data from './data';

function App() {
  var data1 = data['products'];
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
