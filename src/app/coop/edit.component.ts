import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'edit-book',
  templateUrl: './edit.component.html',
})

export class EditComponent {
  @Input() item: Book;
  @Output() edited = new EventEmitter<Book>();

  onsubmit() {
    this.edited.emit(this.item);
  }

//   public str = '';
//   public month = ['a', 'b', 'c', 'd',];
//   for(var i=0; i < this.month.length; ++i){
//   this.str += '<option value ="' + this.month[i] + '"/>';
// }
// var my_list = document.getElementById("keywords");
// my_list.innerHTML = this.str;
