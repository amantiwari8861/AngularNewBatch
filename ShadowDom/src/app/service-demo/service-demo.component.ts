import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './book-data';
// import { BookService } from '../book.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css'],
  // providers:[BookService]
})
export class ServiceDemoComponent implements OnInit {

  books!: Book[];
  constructor(private bookService: BookService) { }
  
  getBooks() {
    this.books = this.bookService.getBooks();
  }
  ngOnInit() {
    this.getBooks();
  }
}
