import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
  ) {}

  create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const recipe: Recipe = new Recipe();
    recipe.title = createRecipeDto.title;
    recipe.prepTime = createRecipeDto.prepTime;
    recipe.cookTime = createRecipeDto.cookTime;
    recipe.servings = createRecipeDto.servings;
    recipe.steps = createRecipeDto.steps;
    recipe.ingredients = createRecipeDto.ingredients;
    recipe.imageUrl = createRecipeDto.imageUrl;
    return this.recipeRepository.save(recipe);
  }

  findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
