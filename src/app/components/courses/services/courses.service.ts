import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';

@Injectable()
export class CoursesService {
  private courseList: Array<Course> = [
    {
      name: 'Angular',
      professor: 'Juan Flores',
      commission: 23123,
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      name: 'JavaScript',
      professor: 'Valeria Lopez',
      commission: 14534,
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      name: 'React Js',
      professor: 'Melina Rodriguez',
      commission: 64342,
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      name: 'Python',
      professor: 'Marcos Castaño',
      commission: 43434,
      startDate: new Date(),
      endDate: new Date(),
    },
  ];
  constructor() { }

  getCourseListService(): Promise<Array<Course>> {
    return new Promise((resolve, reject) => {
      if (this.courseList.length > 0) {
        resolve(this.courseList);
      } else {
        reject([]);
      }
    });
  }
  addCourseService(course: Course) {
    this.courseList.push(course);
  }
}
