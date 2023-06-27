import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return  [
      {
        images: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        name: "Clean Code",
        author:"Robert C. Martin",
        amount: 700
      },

      {
        images: "https://m.media-amazon.com/images/I/51IA4hT6jrL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        name: "Design Patterns",
        author: "Erich Gamma",
        amount: 800
      },

      {
        images: "https://m.media-amazon.com/images/I/41trAWIzKAL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        name: "Refactoring",
        author: "Martin Fowler",
        amount: 700
      }
      
  ]
  }
}
