import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage = "Hi from Parent!";
  childReply = "";

  handleChildMessage(message:string){
    this.childReply = message;
  }
}
