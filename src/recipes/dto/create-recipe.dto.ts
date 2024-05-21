export class CreateRecipeDto {
  title: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  steps: string[];
  imageUrl: string;
}
