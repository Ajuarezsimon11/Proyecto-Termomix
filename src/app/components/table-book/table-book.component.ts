import { Component, inject } from '@angular/core';
import { ThermomixService } from '../../../services/thermomix.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'table-book',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './table-book.component.html',
  styleUrl: './table-book.component.css'
})
export class TableBookComponent {
  service = inject(ThermomixService);
  books$: Observable<any>;

  constructor(){
    this.books$ = this.service.getBooks$();
  }
}
