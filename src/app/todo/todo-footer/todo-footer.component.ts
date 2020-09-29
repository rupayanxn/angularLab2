import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  constructor() { }

  List_of_work=['Walk','Gym','Study','Sleep']

  ngOnInit(): void {
  }

}
