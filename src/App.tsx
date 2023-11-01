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

const ingredients: IngredientItem[] = [
  {name: 'Meat', price: 80, image: meat},
  {name: 'Cheese', price: 50, image: cheese},
  {name: 'Salad', price: 10, image: salad},
  {name: 'Bacon', price: 60, image: bacon},
];

const App = () => {
  const [ingredients, setIngredients] = useState<IngredientItem[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  return (
    <div className="App">
      <div className="Ingredients">
        {ingredients.map((ingredient, index) => (
          <div key={index}><img src={ingredient[index].image} alt={ingredient.name}/>{ingredient.name}{ingredient.count}</div>
        ))}
      </div>

      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <div className="Salad"></div>
        <div className="Cheese"></div>
        <div className="Meat"></div>
        <div className="BreadBottom"></div>
      </div>
    </div>
  );
};

export default App;
