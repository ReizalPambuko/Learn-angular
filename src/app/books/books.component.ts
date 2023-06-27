import { Component, OnInit } from '@angular/core';
import { Book } from '../type/book-interface';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  myName: string = ""

  show: boolean = true;
  isDisable: boolean = false;

  constructor(private booksService: BooksService) {
    console.log({constructor: "Constructor"})
  }
  
  books: Book[] = []

  ngOnInit(): void {
    // console.log({Oninit: "OnInit"})
    this.books = this.booksService.getBooks()
  }

  handleClick() {
    this.isDisable = true
  }

  isShow() {
      this.show = !this.show;
  }


//   handleInput(event: any) {
//     this.myName = event.target.value
//   }


    addToCart(event: any) {
      console.log(event)
    }


}

interface book {
  images: string;
  name: string;
  author: string;
  amount:number
}