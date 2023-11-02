import React, { useState } from 'react';
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
  { name: 'Meat', count: 0 },
  { name: 'Cheese', count: 0 },
  { name: 'Salad', count: 0 },
  { name: 'Bacon', count: 0 },
];

const ingredients: IngredientItem[] = [
  { name: 'Meat', price: 80, image: meat },
  { name: 'Cheese', price: 50, image: cheese },
  { name: 'Salad', price: 10, image: salad },
  { name: 'Bacon', price: 60, image: bacon },
];

const App = () => {
  const [ingredientCounts, setIngredientCounts] = useState<IngredientCount[]>(initialIngredientCounts);

  const handleIncrement = (index: number) => {
    const updatedCounts = [...ingredientCounts];
    updatedCounts[index].count++;
    setIngredientCounts(updatedCounts);
  };

  const handleDecrement = (index: number) => {
    const updatedCounts = [...ingredientCounts];
    if (updatedCounts[index].count > 0) {
      updatedCounts[index].count--;
      setIngredientCounts(updatedCounts);
    }
  };

  return (
    <div className="App">
      <div className="Ingredients">
        {ingredientCounts.map((ingredient, index) => (
          <div key={index}>
            <img src={ingredients[index].image} alt={ingredient.name} />
            {ingredient.name} - {ingredient.count}
            <button onClick={() => handleIncrement(index)}>Добавить</button>
            <button onClick={() => handleDecrement(index)}>Убрать</button>
          </div>
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
