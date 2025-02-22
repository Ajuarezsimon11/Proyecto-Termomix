import { Component, inject } from '@angular/core';
import { ThermomixService } from '../../../services/thermomix.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-recipes',
  imports: [CommonModule],
  templateUrl: './page-recipes.component.html',
  styleUrl: './page-recipes.component.css',
})
export class PageRecipesComponent {
  service = inject(ThermomixService);
  //@ts-ignore
  recipes$: Observable<Recipe>;
  rutaActiva = inject(ActivatedRoute);
  route = inject(Router);

  constructor() {
    const dishId = this.rutaActiva.snapshot.paramMap.get('dishId');
    //@ts-ignore
    if (dishId) {
      this.recipes$ = this.service.getRecipesByDish$(dishId);
    } else {
      this.route.navigate(['recetas']);
    }
  }

  returnToPageDishes($event: MouseEvent) {
    const bookId = this.rutaActiva.snapshot.paramMap.get('bookId');
    if (bookId){
      return this.route.navigate(['libros',bookId,'platos']);
    }else {
      return this.route.navigate(['platos']);
    }
  }
}
