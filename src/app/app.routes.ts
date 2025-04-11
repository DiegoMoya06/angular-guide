import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './child/child.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent},
];
