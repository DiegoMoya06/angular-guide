import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  // Exports the required infrastructure and directives for reactive forms.
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Output() addUser = new EventEmitter<string>();
  nameControl = new FormControl('');

  submit() {
    const name = this.nameControl.value?.trim();

    if (name){
      this.addUser.emit(name);
    }
  }
}
