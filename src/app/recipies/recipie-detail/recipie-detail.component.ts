import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  recipeDet: Recipie;
  id: number;
  constructor(private recipeService: RecipeService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeDet = this.recipeService.getRecipe(this.id);
    });
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDet.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
