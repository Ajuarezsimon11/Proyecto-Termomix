import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ThermomixService } from '../../../services/thermomix.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'table-recipe',
  imports: [CommonModule],
  templateUrl: './table-recipe.component.html',
  styleUrl: './table-recipe.component.css',
})
export class TableRecipeComponent implements OnInit {
  service = inject(ThermomixService);
  dishes$: Observable<Dish[]>;

  constructor(public route: Router) {
    this.dishes$ = this.service.getDishes$();
  }

  ngOnInit() {
    document
      .querySelector('#input')
      //@ts-ignore
      ?.addEventListener('input', this.ShowRecipesFromDish.bind(this));
  }

  public ShowRecipesFromDish(event: InputEvent) {
    if (event.inputType == 'insertReplacementText' || event.inputType == null) {
      const target = event.target as HTMLInputElement;
      const datalist = document.querySelector('#recipesList') as HTMLDataListElement;

      const optionSelect = Array.from(datalist.options).find(
        (option) => option.value === target.value
      );

      if (optionSelect) {
        const dishId = optionSelect.dataset['dishId'];
        this.route.navigate(['platos', dishId, 'recetas']);
      }

    }
  }
}
