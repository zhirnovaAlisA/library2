import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, FormControl,  ReactiveFormsModule  } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';



@Component({
  standalone: true,
  selector: 'app-books-edit-add',
  templateUrl: './books-edit-add.component.html',
  styleUrls: ['./books-edit-add.component.css'],
  imports: [RouterModule, FormsModule,  ReactiveFormsModule, CommonModule] //FormControl] //FormBuilder, FormGroup]
})

//свойство, ! показывает, что оно будет инициализировано позже
export class BooksEditAddComponent implements OnInit {
  genres: string[] = ['Роман', 'Фантастика', 'Детектив'];
  coverTypes: string[] = ['Мягкая', 'Твердая'];
  purposes: string[] = ['Отдых', 'Образование'];

  profileForm!: FormGroup;
  bookId!: number;

  //принимает на вход FormBuilder
  //запускается до создания компонента
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) { }

  //реализует интерфейс OnInit
  ////ngOnInit будет вызываться при инициализации компонента
  ngOnInit(): void {
    this.initForm();
    this.loadBook();
  }


  loadBook(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.bookId = +idParam;
      const book = this.bookService.getBookById(this.bookId);
      if (book) {
        this.profileForm.patchValue(book);
      }
    } 
  }
  
  
  initForm(): void {
    this.profileForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: [''],
      cover_type: [''],
      amount: ['', [Validators.required, Validators.min(1)]], 
      price: ['', [Validators.required, Validators.min(1)]],
      purpose: ['']
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const editedBook: Book = this.profileForm.value;
      const idParam = this.route.snapshot?.paramMap.get('id');
      const id = idParam ? +idParam : null;
      if (id === null || id > this.bookService.getMaxBookId()) {
        this.bookService.addBook(editedBook); // Добавление новой книги
      } else {
        editedBook.id = id;
        this.bookService.editBook(editedBook); // Редактирование существующей книги
      }
      this.router.navigate(['/']); // Переход на главную страницу
    }
  }
  
  
}


