import { Ingridient } from '../shared/ingredient.model';

export class Recipie {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingridient[];
    constructor(name: string, description: string, imagePath: string, ingredients: Ingridient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
