import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<string[]>(this.loadUsers());
  users$: Observable<string[]> = this.usersSubject.asObservable();

  private loadUsers(): string[] {
    return JSON.parse(localStorage.getItem('users') ?? '["Alice","Bob"]');
  }

  private save(users:string[]){
    localStorage.setItem('users',JSON.stringify(users));
    this.usersSubject.next(users);
  }

  addUser(name:string){
    const current = this.usersSubject.value;
    const updated = [...current,name];
    this.save(updated);
  }

  updateUser(oldName:string,newName:string){
    const updated = this.usersSubject.value.map(u => (u === oldName ? newName : u));
    this.save(updated);
  }

  deleteUser(name:string){
    const updated = this.usersSubject.value.filter(u => u !== name);
    this.save(updated);
  }

  constructor() { }
}
