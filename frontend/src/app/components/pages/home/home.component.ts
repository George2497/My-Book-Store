import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../shared/models/Book';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  books: Book[] = [];
  stars = [1, 2, 3, 4, 5];
  rating = 3;

  constructor(private bookService: BookService) {
    this.books = bookService.getAll().map((book) => ({ ...book, rating: book.rating ?? 3 }));
  }

  rate(book: Book, value: number) {
    book.rating = value;
  }

  ngOnInit(): void {}
}
