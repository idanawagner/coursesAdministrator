import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { token } from 'src/app/config';
import { Configuration } from 'src/app/shared/models/configuration';
import { Course } from 'src/app/shared/models/course';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courseList!: Array<Course>;


  constructor(
    private coursesService: CoursesService,
    @Inject(token) private config: Configuration,
    private router: Router
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

  addCourse(){
    this.router.navigate(['courses/addCourse'])
  };
  editCourse(course: Course){
    this.router.navigate(['courses/editCourse',course])
  }
  deleteCourse(course: Course){
    this.coursesService.deleteCoursesService(course)
  }
}
