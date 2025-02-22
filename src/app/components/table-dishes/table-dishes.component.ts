import { Component, inject, Input } from '@angular/core';
import { ThermomixService } from '../../../services/thermomix.service';
import { Observable, throwIfEmpty } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'table-dishes',
  imports: [ CommonModule , RouterLink],
  templateUrl: './table-dishes.component.html',
  styleUrl: './table-dishes.component.css'
})
export class TableDishesComponent {
  service = inject(ThermomixService);
  dishes$: Observable<Dish[]>;
  routeActive = inject(ActivatedRoute);

  constructor(){
    const bookId= this.routeActive.snapshot.paramMap.get('bookId');
    // console.log(bookId);

    if (bookId) {
      this.dishes$ = this.service.getDishesFromBooks$(bookId);
    }else {
      this.dishes$ = this.service.getDishes$();
    }
  }
}
