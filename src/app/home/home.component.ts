import { Component } from '@angular/core';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private readonly logger:LoggerService) {
  }

  sayHello(){
    this.logger.log("Hello from Home!");
  }
}
