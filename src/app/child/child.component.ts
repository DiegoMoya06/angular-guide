import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // A ParentComponent sends a message to a ChildComponent using @Input()
  @Input() messageFromParent: string = "";
  // The ChildComponent responds by emitting an event using @Output() and EventEmitter
  @Output() notifyParent = new EventEmitter<string>();

  sendMessageToParent() {
    this.notifyParent.emit("Hello from Child!");
  }
}
