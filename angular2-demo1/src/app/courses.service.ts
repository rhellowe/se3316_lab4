import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  courses=["Course1","Course2","Course3"];
getCourses(): string[]{
    
    return this.courses;
}
saveCourses(course:string){
  this.courses.push(course);
}
  constructor() { }

}
