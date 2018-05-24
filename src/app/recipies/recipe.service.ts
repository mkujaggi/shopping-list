import { Recipie } from './recipie.modal';
import {  Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipie[]>();
    private recipies: Recipie[] = [
        new Recipie('Test Recipies', 'Test desc',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingridient('Meat', 1),
            new Ingridient('French Fries', 20)
        ]),
        new Recipie('Another Recipies', 'Test desc',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingridient('Buns', 2),
            new Ingridient('Meat', 1)
        ])
    ];
    constructor(private slService: ShoppingListService) {}
    setRecipes(recipe: Recipie[]) {
        this.recipies = recipe;
        this.recipesChanged.next(this.recipies.slice());
    }
    getRecipes() {
        return this.recipies.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingridient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipies[index];
    }
    addRecipe (recipe: Recipie) {
        this.recipies.push(recipe);
        this.recipesChanged.next(this.recipies.slice());
    }
    updateRecipe (index: number, newRecipe: Recipie) {
        this.recipies[index] = newRecipe;
        this.recipesChanged.next(this.recipies.slice());
    }
    deleteRecipe(index: number) {
        this.recipies.splice(index, 1);
        this.recipesChanged.next(this.recipies.slice());
    }
}
