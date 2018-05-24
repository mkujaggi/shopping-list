import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipiesComponent } from './recipies.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipie-list/recipie-item/recipie-item.component';
import { DropdowndirectiveDirective } from '../shared/dropdowndirective.directive';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        RecipiesComponent,
        RecipeStartComponent,
        RecipieListComponent,
        RecipeEditComponent,
        RecipieDetailComponent,
        RecipieItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule {}
