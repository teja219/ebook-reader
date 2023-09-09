import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
// Task 4: import interface here

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  // Task 4: Declare variables here

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    // Task 4: Call the searchBA() function here
    }

  // Task 4: Add the searchBA() function here

  // Task 5: Add the downloadBook() function here

}




