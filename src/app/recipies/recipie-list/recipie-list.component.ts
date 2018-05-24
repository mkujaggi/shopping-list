import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipie } from '../recipie.modal';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit, OnDestroy {

  recipies: Recipie[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService,
  private router: Router,
private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipie[]) => {
        this.recipies = recipes;
      }
    );
    this.recipies = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
