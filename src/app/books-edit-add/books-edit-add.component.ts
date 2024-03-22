import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-edit-add', //его потом можно выводить в html
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './books-edit-add.component.html',
  styleUrl: './books-edit-add.component.css'
})

//реализует интерфейс OnInit
export class BooksEditAddComponent implements OnInit {
//
  genres: string[] = ['Фантастика', 'Детектив', 'Роман', 'Ужасы', 'Триллер']; //после : идёт тип данных который будет использован, можно изначально не задавать значение, можно указать any(любое значение)
  coverTypes: string[] = ['Мягкая', 'Твердая'];
  purposes: string[] = ['Учебное', 'Художественное'];

  //свойство, ! показывает, что оно будет инициализировано позже
  profileForm!: FormGroup;

  //принимает на вход FormBuilder
  //запускается до создания компонента
  constructor(private fb: FormBuilder) { }

//ngOnInit будет вызываться при инициализации компонента
  ngOnInit(): void {
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
    //будет метод отправки 
  }
}
