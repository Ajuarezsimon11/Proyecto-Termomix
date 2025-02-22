import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, switchMap, tap, zip } from 'rxjs';
import { Book } from '../app/models/book.model';
import { Dish } from '../app/models/dish.model';
import { Recipe } from '../app/models/recipe.model';

type BookDTO = {
  clave: string;
  titulo: string;
}
type DishDTO = {
  clave: string;
  nombre: string;
  foto: string;
}
type RecipeDTO = {
  receta: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThermomixService {
  http = inject(HttpClient);

  constructor() {}

  public getBooks$(): Observable<Book[]>{
    return this.http.get<{libros: BookDTO[]}>('http://localhost:8080/controlador.php?operacion=obtener_libros').pipe(
      map(reponse => reponse.libros.map(book => new Book(book.clave, book.titulo))),
    );
  }

  public getDishesFromBooks$(bookId: string): Observable<Dish[]>{
    return this.http.get<{platos: DishDTO[]}>(`http://localhost:8080/controlador.php?operacion=obtener_platos&libro=${bookId}`).pipe(
      map(response => response.platos.map(dish => new Dish(dish.clave, dish.nombre, dish.foto))),
    )
  }


  public getDishes$(): Observable<Dish[]>{
    return this.getBooks$().pipe(
      switchMap(books => zip(books.map(book => this.getDishesFromBooks$(book.code)))),
      map(dishesUnflatten => dishesUnflatten.flat()),
    )
  }

  public getRecipesByDish$(dishId: string): Observable<Recipe>{
    return this.http.get<{receta: string}>(`http://localhost:8080/controlador.php?operacion=obtener_receta&plato=${dishId}`).pipe(
      map(recetas => new Recipe(recetas.receta)),
    )
  }

  public getRecipes$(): Observable<Recipe[]>{
    return this.getDishes$().pipe(
      switchMap(recipes => zip(recipes.map(plato => this.getRecipesByDish$(plato.code)))),
      map(dishesUnflatten => dishesUnflatten.flat()),
    )
  }
}
