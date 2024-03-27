import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books-edit-add',
  templateUrl: './books-edit-add.component.html',
  styleUrls: ['./books-edit-add.component.css']
})

//свойство, ! показывает, что оно будет инициализировано позже
export class BooksEditAddComponent implements OnInit {
  profileForm!: FormGroup;
  bookId!: number;

  //принимает на вход FormBuilder
  //запускается до создания компонента
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bookService: BookService
  ) { }

  //реализует интерфейс OnInit
  ////ngOnInit будет вызываться при инициализации компонента
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.bookId = +idParam;
      this.loadBook(this.bookId);
    } 
    this.initForm();
  }

  loadBook(id: number): void {
    if (this.bookService) {
      const book = this.bookService.getBookById(id);
      if (book) {
        this.profileForm.patchValue(book);
      }
    }
  }
  
  
  initForm(): void {
    this.profileForm = this.fb.group({
      name: [''],
      author: [''],
      genre: [''],
      cover_type: [''],
      amount: [''],
      price: [''],
      purpose: ['']
    });
  }

  onSubmit(): void {
    // Обработка отправки формы
  }
}


