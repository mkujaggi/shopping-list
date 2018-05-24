import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './recipies.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';

const recipesRoutes: Routes = [
    {
        path: '', component: RecipiesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipieDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
        ]
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class RecipesRoutingModule {}
