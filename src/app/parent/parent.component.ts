import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from '../child/child.component';
import {UserCardComponent} from '../user-card/user-card.component';
import {UserFormComponent} from '../user-form/user-form.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, UserCardComponent, UserFormComponent, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  users = ['John', 'Alice'];
  selectedUser: string | null = null;
  parentMessage = "Hi from Parent!";
  childReply = "";

  addUser(name: string) {
    this.users.push(name);
  }

  onUserSelected(name: string) {
    this.selectedUser = name;
  }

  handleChildMessage(message: string) {
    this.childReply = message;
  }
}
