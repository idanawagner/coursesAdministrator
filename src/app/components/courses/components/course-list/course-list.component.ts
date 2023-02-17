import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { token } from 'src/app/config';
import { Configuration } from 'src/app/models/configuration';
import { Course } from 'src/app/models/course';
import { DataService } from 'src/app/services/data.service';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courseList!: Array<Course>;


  constructor(
    private coursesService: CoursesService,
    @Inject(token) private config: Configuration
  ){}

  ngOnInit(): void {
    this.coursesService.getCourseListService()
      .then( (courses: Array<Course>) => {
        this.courseList = courses;
      })
      .catch((error:any) => {
        console.log(error);
      })
  };

  newCourse = {
      name: 'NodeJs',
      professor: 'Ariel Rodriguez',
      commission: 23768,
      startDate: new Date(),
      endDate: new Date(),
  };

  addCourse(){
    return this.coursesService.addCourseService(this.newCourse);
  };
}
