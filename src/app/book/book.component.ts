import { Component, OnInit } from "@angular/core";
import { BookService } from "../book.service";
import { ActivatedRoute } from '@angular/router';
// Task 7: Add import here

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
  // Task 7: Declare your variables here
  bookContinuousText: any;
  bookData: any;
  bookText: any;
  textURL!: string;
  showPre = false;

  // Task 8: Declare your variable here
  box: any;
  // Task 11: Declare your variables here

  // Task 14: Declare your variable here
  
  
  constructor(
    private bookService: BookService,
    // Task 7: Add private instance here
    private route: ActivatedRoute,
  )

  {}

  ngOnInit(): void {
    // Task 7: Call your getBook() function here
    this.getBook();
  }

  // Task 7: Add your getBook() and toggleDisplay() functions here
  getBook(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.bookService.getBookById(id)
        .subscribe((data) => {
          this.bookData = data;
          if ("text/plain; charset=us-ascii" in this.bookData["formats"]) {
            this.textURL = this.bookData["formats"]["text/plain; charset=us-ascii"].split('org')[1]
          }
          else if ("text/plain; charset=utf-8" in this.bookData["formats"]) {
            this.textURL = this.bookData["formats"]["text/plain; charset=utf-8"].split('org')[1]
          }
          else if ("text/plain; charset=iso-8859-1" in this.bookData["formats"]) {
            this.textURL = this.bookData["formats"]["text/plain; charset=iso-8859-1"].split('org')[1]
          }
          this.bookService.getBookText(this.textURL)
              .subscribe((textdata) => {
                this.bookText = textdata;
                this.bookContinuousText = this.bookText.replaceAll("\r\n\r\n","<br><br>");
              })
        })
  }
  toggleDisplay() {
    this.showPre = !this.showPre
  }
  // Task 8: Add your changeFontSize() function here
  changeFontSize(newFontSize: string): void {
    this.box = this.showPre
        ? document.getElementById("text-pre")
        : document.getElementById("text");

    if (this.box != null) {
      this.box.classList.remove(
          ...["normal-font-size", "large-font-size", "larger-font-size"].filter(
              (f) => f != newFontSize
          )
      );
      this.box.classList.add(newFontSize);
    }
  }


  // Task 9: Add your changeLineSpacing() function here

  // Task 11: Add your countMatches() function here

  // Task 14: Add your scrollToPrevious() and scrollToNext() functions here

}
