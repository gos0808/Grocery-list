
import './App.css';
import GroceryList from './grocery-list';
import groceryImage from './grocery.jpg';
import manImage from './man-with-purchase.jpg';


function App() {
  return (
    <div className="App" >
      <img width='200px' src={groceryImage} alt='food' />
      <h1>Grocery List</h1>
      <GroceryList />
      <img className='secondImage' width='200px' src={manImage} alt='grocery list' />
    </div>
  );
};

export default App

