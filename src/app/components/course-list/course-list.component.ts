import { Component } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courseList: Array<Course> = [
    { name: 'Angular',
      professor: 'Juan Flores',
      commission: 23123,
      startDate: new Date(),
      endDate: new Date(),
    },
    { name: 'JavaScript',
      professor: 'Valeria Lopez',
      commission: 14534,
      startDate: new Date(),
      endDate: new Date(),
    },
    { name: 'React Js',
      professor: 'Melina Rodriguez',
      commission: 64342,
      startDate: new Date(),
      endDate: new Date(),
    },
    { name: 'Python',
      professor: 'Marcos Castaño',
      commission: 43434,
      startDate: new Date(),
      endDate: new Date(),
    },
  ];
}
