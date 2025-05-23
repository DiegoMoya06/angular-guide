import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-card',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.css'
})
export class UserCardComponent {
    @Input() name: string = "";
    @Output() selected = new EventEmitter<string>();
    @Output() edited = new EventEmitter<{ old: string; new: string }>();
    @Output() deleted = new EventEmitter<string>();

    isEditing = false;
    newName = '';

    startEdit() {
        this.isEditing = true;
        this.newName = this.name;
    }

    saveEdit() {
        if (this.newName.trim()) {
            this.edited.emit({old: this.name, new: this.newName.trim()});
            this.isEditing = false;
        }
    }

    selectUser() {
        this.selected.emit(this.name);
    }
}
