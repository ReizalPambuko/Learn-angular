import { Injectable } from '@angular/core';
import { Book } from '../type/book-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Book[] = []

  constructor() { }

  add(book:Book) {
    this.cart.push(book)
  }

  get() {
    return this.cart
  }
  remove(book:Book) {
    this.cart = this.cart.filter(b => b != book);
  }
}
