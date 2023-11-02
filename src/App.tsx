import {useState} from 'react';
import './components/Burger/Burger.css';
import './App.css';
import meat from './assets/meat.png';
import cheese from './assets/cheese.png';
import salad from './assets/salad.png';
import bacon from './assets/bacon.png';

interface IngredientItem {
  name: string;
  price: number;
  image: string;
}

interface IngredientCount {
  name: string;
  count: number;
}

const initialIngredientCounts: IngredientCount[] = [
  {name: 'Meat', count: 0},
  {name: 'Cheese', count: 0},
  {name: 'Salad', count: 0},
  {name: 'Bacon', count: 0},
];

const ingredients: IngredientItem[] = [
  {name: 'Meat', price: 80, image: meat},
  {name: 'Cheese', price: 50, image: cheese},
  {name: 'Salad', price: 10, image: salad},
  {name: 'Bacon', price: 60, image: bacon},
];

const App = () => {
  const [ingredientCounts, setIngredientCounts] = useState<IngredientCount[]>(initialIngredientCounts);
  const [burgerIngredients, setBurgerIngredients] = useState<string[]>([]);

  const handleIncrement = (index: number) => {
    const updatedCounts = [...ingredientCounts];
    updatedCounts[index].count++;
    setIngredientCounts(updatedCounts);

    const ingredientName = updatedCounts[index].name;
    setBurgerIngredients(prevIngredients => [...prevIngredients, ingredientName]);
  };

  const handleDecrement = (index: number) => {
    const updatedCounts = [...ingredientCounts];
    if (updatedCounts[index].count > 0) {
      updatedCounts[index].count = 0;
      setIngredientCounts(updatedCounts);

      const ingredientName = updatedCounts[index].name;
      setBurgerIngredients(prevIngredients => prevIngredients.filter(name => name !== ingredientName));
    }
  };

  const baseBurgerPrice = 30;

  const calculateTotalPrice = () => {
    const ingredientPriceSum = burgerIngredients.reduce(
      (sum, ingredient) => {
        const selectedIngredient = ingredients.find(item => item.name === ingredient);
        return sum + (selectedIngredient?.price || 0);
      },
      0
    );
    return baseBurgerPrice + ingredientPriceSum;
  };


  return (
    <div className="App">
      <div className='BurgerConstructor'>
        <div className="Ingredients">
          {ingredientCounts.map((ingredient, index) => (
            <div className='ingredient' key={index}>
              <img onClick={() => handleIncrement(index)} src={ingredients[index].image} alt={ingredient.name}/>
              <div>
                <strong className='ingredientName'>{ingredient.name}</strong><strong>x{ingredient.count}</strong>
              </div>
              <button onClick={() => handleDecrement(index)}>Clear</button>
            </div>
          ))}
        </div>

        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          {burgerIngredients.map((ingredient, index) => (
            <div key={index} className={ingredient}></div>
          ))}
          <div className="BreadBottom"></div>
        </div>
      </div>

      <div className="TotalPrice">
        <strong>Price: {calculateTotalPrice()}$</strong>
      </div>
    </div>
  );
};

export default App;
