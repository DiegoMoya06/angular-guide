import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from '../child/child.component';
import {UserCardComponent} from '../user-card/user-card.component';
import {UserFormComponent} from '../user-form/user-form.component';
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-parent',
    standalone: true,
    imports: [CommonModule, UserCardComponent, UserFormComponent, ChildComponent],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css'
})
export class ParentComponent {
    users: string[] = [];
    selectedUser: string | null = null;
    parentMessage = "Hi from Parent!";
    childReply = "";

    constructor(private userService: UserService) {
    };

    ngOnInit(): void {
        this.userService.users$.subscribe(users => this.users = users);
    }

    addUser(name: string) {
        this.userService.addUser(name);
    }

    onUserSelected(name: string) {
        this.selectedUser = name;
    }

    handleChildMessage(message: string) {
        this.childReply = message;
    }

    editUser(event: { old:string; new:string}){
        this.userService.updateUser(event.old,event.new);
    }

    deleteUser(name:string){
        this.userService.deleteUser(name);
    }
}
