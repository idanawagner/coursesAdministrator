import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from 'src/app/shared/models/course';

@Injectable()
export class CoursesService {
  private courseList: Array<Course> = [
    {
      name: 'Angular',
      professor: 'Juan Flores',
      commission: 23123,
      startDate: new Date(2023,3,14),
      endDate: new Date(2023,6,14),
    },
    {
      name: 'JavaScript',
      professor: 'Valeria Lopez',
      commission: 14534,
      startDate: new Date(2023,5,4),
      endDate: new Date(2023,7,4),
    },
    {
      name: 'React Js',
      professor: 'Melina Rodriguez',
      commission: 64342,
      startDate: new Date(2023,4,8),
      endDate: new Date(2023,5,8),
    },
    {
      name: 'Python',
      professor: 'Marcos Castaño',
      commission: 43434,
      startDate: new Date(2023,4,1),
      endDate: new Date(2023,12,1),
    },
  ];
  private courses$: BehaviorSubject<Array<Course>>;
  constructor() {
    this.courses$ = new BehaviorSubject<Array<Course>>(this.courseList);

   }

  getCourseListService(): Promise<Array<Course>>{
    return new Promise((resolve, reject) => {
      if (this.courseList.length > 0) {
        resolve(this.courseList);
      } else {
        reject([]);
      }
    });
  }
  addCourseService(course: Course):void {
    this.courseList.push(course);
    this.courses$.next(this.courseList)
  };

  editCourseService(course:Course):void {
    let idx = this.courseList.findIndex((c:Course)=> c.commission === course.commission)
    if (idx > -1){
      this.courseList[idx] = course
      this.courses$.next(this.courseList)
    }
  }
  deleteCoursesService(course: Course){
    let idx = this.courseList.findIndex((c:Course)=> c.commission === course.commission);
    this.courseList.splice(idx,1)
    this.courses$.next(this.courseList);

  }

}
