import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() name: string = "";
  @Output() selected = new EventEmitter<string>();

  selectUser() {
    this.selected.emit(this.name);
  }
}
