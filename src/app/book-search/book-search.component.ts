import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from "../book.model";

// Task 4: import interface here

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  // Task 4: Declare variables here
  completeData: any;
  nothing: boolean = false;
  books: Array<IBook> = []
  bookSearchInput: string = ""

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
      this.searchBA(this.bookSearchInput);
  }

  // Task 4: Add the searchBA() function here
  searchBA(input: string){
    this.completeData = []
    this.books = []
    this.nothing = false
    this.bookService.searchBook(input).subscribe(data => {
		this.completeData = data
      	for(let result of this.completeData["results"]){
            this.books.push({
              "id": result["id"],
              "download": result["formats"]["text/html"],
              "author": result["authors"][0].name,
              "title": result["title"],
              "image": result["formats"]["image/jpeg"]
            })
        }

        if (this.books.length==0){
          this.nothing = true
        }



    })
  }
  // Task 5: Add the downloadBook() function here
  downloadBook(id: number){
      window.open("https://www.gutenberg.org/files/" + id + "/" + id + "-0.zip", '_blank');
  }
}




