import { Component } from '@angular/core';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private logger:LoggerService) {
  }

  sayHello(){
    this.logger.log("Hello from Home!");
  }
}
