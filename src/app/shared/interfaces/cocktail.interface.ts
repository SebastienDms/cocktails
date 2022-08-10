import { Ingredient } from './ingredient.interface';

export interface Cocktail {
  name: string;
  image: string;
  description: string;
  ingredients?: Ingredient[];
}
