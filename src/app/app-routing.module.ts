import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';
const appRoute: Routes = [
    {path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipies/recipes.module#RecipesModule'},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoute, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor() {
    }
}
