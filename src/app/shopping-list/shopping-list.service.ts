import { Ingridient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientChanged = new Subject<Ingridient[]>();
    startedEditing = new Subject();
    private ingredients: Ingridient[] = [
        new Ingridient('Apples', 5),
        new Ingridient('eggs', 10)
    ];
    constructor() {}
    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index: number) {
        return this.ingredients[index];
    }
    addIngredient(ingredient: Ingridient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingridient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
    updateIngredient(index: number, newIngredient: Ingridient) {
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}
