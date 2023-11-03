export interface IngredientCount {
  name: string;
  count: number;
}

export const initialIngredientCounts: IngredientCount[] = [
  {name: 'Meat', count: 0},
  {name: 'Cheese', count: 0},
  {name: 'Salad', count: 0},
  {name: 'Bacon', count: 0},
];
