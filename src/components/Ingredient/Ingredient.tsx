import meat from '../../assets/meat.png';
import cheese from '../../assets/cheese.png';
import salad from '../../assets/salad.png';
import bacon from '../../assets/bacon.png';

interface IngredientItem {
  name: string;
  price: number;
  image: string;
}

const ingredients: IngredientItem[] = [
  {name: 'Meat', price: 80, image: meat},
  {name: 'Cheese', price: 50, image: cheese},
  {name: 'Salad', price: 10, image: salad},
  {name: 'Bacon', price: 60, image: bacon},
];

export default ingredients;
