import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  books: Book[];
  selectedBook: string;

  constructor() { 
    this.books = [
      {name: 'Book1', author: 'Author1'},
      {name: 'Book2', author: 'Author2'},
      {name: 'Book3', author: 'Author3'},
      {name: 'Book4', author: 'Author4'},
      {name: 'Book5', author: 'Author5'}
  ];
  }

  ngOnInit(): void {
  }

}
