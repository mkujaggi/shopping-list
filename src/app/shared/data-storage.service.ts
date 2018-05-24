import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipies/recipe.service';
import { Recipie } from '../recipies/recipie.modal';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService,
                private authService: AuthService) {}
    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-3d7d0.firebaseio.com/recipes.json?auth=' + token,
        this.recipeService.getRecipes());
    }
    getRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://ng-recipe-book-3d7d0.firebaseio.com/recipes.json?auth=' + token).pipe(map(
            (response: Response) => {
                const recipes: Recipie[] = response.json();
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ))
        .subscribe(
            (recipes: Recipie[]) => {

                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
