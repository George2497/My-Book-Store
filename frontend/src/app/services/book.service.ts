import { Injectable } from '@angular/core';
import { sample_books } from '../../data';
import { Book } from '../shared/models/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  getAll(): Book[] {
    return sample_books;
  }
}
