import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../type/book-interface';
import { OnDestroy } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnDestroy{
  @Input() book:Book = {} as Book;
  @Output() bookEmiter = new EventEmitter<Book>();

  isCart:boolean = false;
  ngOnDestroy(): void {
      console.log({Destroy: "Destroy"})
  }
  constructor(private cartService: CartService) {}


  addCard() {
    console.log(this.book)
      this.isCart = true
      this.cartService.add(this.book)
    // this.bookEmiter.emit(this.book)
  }

  removeCart() {
    this.isCart = false;
    this.cartService.remove(this.book)
  }
}
