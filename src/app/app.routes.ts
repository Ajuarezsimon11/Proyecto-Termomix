import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TableBookComponent } from './components/table-book/table-book.component';
import { IndexComponent } from './components/index/index.component';
import { TableDishesComponent } from './components/table-dishes/table-dishes.component';
import { TableRecipeComponent } from './components/table-recipe/table-recipe.component';
import { PageRecipesComponent } from './components/page-recipes/page-recipes.component';
import { PageError404Component } from './components/page-error-404/page-error-404.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: IndexComponent},
    {path: 'libros', component: TableBookComponent},
    {path: 'libros/:bookId/platos', component: TableDishesComponent},
    {path: 'platos', component: TableDishesComponent},
    {path: 'recetas', component: TableRecipeComponent},
    {path: 'platos/:dishId/recetas', component: PageRecipesComponent},
    {path: 'libros/:bookId/platos/:dishId/recetas', component: PageRecipesComponent},
    {path: '**', component: PageError404Component},
];
