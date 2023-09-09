import { Component, OnInit } from "@angular/core";
import { BookService } from "../book.service";
// Task 7: Add import here

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
  // Task 7: Declare your variables here

  // Task 8: Declare your variable here

  // Task 11: Declare your variables here

  // Task 14: Declare your variable here
  
  
  constructor(
    private bookService: BookService,
    // Task 7: Add private instance here

  )

  {}

  ngOnInit(): void {
    // Task 7: Call your getBook() function here

  }

  // Task 7: Add your getBook() and toggleDisplay() functions here

  // Task 8: Add your changeFontSize() function here

  // Task 9: Add your changeLineSpacing() function here

  // Task 11: Add your countMatches() function here

  // Task 14: Add your scrollToPrevious() and scrollToNext() functions here

}
