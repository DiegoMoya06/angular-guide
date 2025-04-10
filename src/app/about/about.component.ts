import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from '../services/data.service';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-about',
  standalone: true,
  // NgModule. code. Exports all the basic Angular directives and pipes, such as NgIf , NgForOf , DecimalPipe , and so on.
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  posts: any[] = [];

  constructor(private readonly dataService: DataService,private readonly logger:LoggerService) {
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
      this.logger.log(data);
    });
  }
}
