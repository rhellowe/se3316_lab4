import { Component } from '@angular/core';
import {CoursesComponent} from "./courses/courses.component"
@Component({
  selector: 'app-root',
  template: "<app-courses></app-courses><app-authors></app-authors>"
})
export class AppComponent {
  title = 'app';
}
