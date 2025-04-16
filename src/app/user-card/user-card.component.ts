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
    // TODO: check
    // @Output() editingChange = new EventEmitter<boolean>();

    isEditing = false;
    newName = '';
    currentSelected = '';

    startEdit() {
        this.isEditing = true;
        this.newName = this.name;
        console.log("Selected",this.name);
        // TODO: check
        // this.editingChange.emit(this.isEditing);
    }

    saveEdit() {
        if (this.newName.trim()) {
            this.edited.emit({old: this.name, new: this.newName.trim()});
            this.isEditing = false;
        }
    }

    selectUser() {
        // this.currentSelected = this.name;
        this.selected.emit(this.name);
    }

    deleteUser(){
        this.deleted.emit(this.name);
    }
}
