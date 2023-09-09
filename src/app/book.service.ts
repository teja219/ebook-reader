import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

// Task 2: Import httpClient here

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(

      private http: HttpClient

    ) {

  }
  
  // Task 2: Add your functions here
  searchBook(bookOrAuthorName: string){
	return this.http.get("https://gutendex.com/books?search="+bookOrAuthorName)
  }

  getBookById(id: number) {
    return this.http.get("https://gutendex.com/books/"+id)
  }

  getBookText(bookTextUrl: string) {
    return this.http.get(bookTextUrl, {responseType: "text"})
  }
}