import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { token } from 'src/app/environment/config';
import { Configuration } from 'src/app/shared/models/configuration';
import { Course } from 'src/app/shared/models/course';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { Session } from 'src/app/shared/models/session';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses$!: Observable<Array<Course>>
  session$!: Observable<Session>;


  constructor(
    private coursesService: CoursesService,
    @Inject(token) private config: Configuration,
    private router: Router,
    private sessionService: SessionService
  ){}

  ngOnInit(): void {
      this.courses$ = this.coursesService.getCourseListService()
      this.session$ = this.sessionService.getSession()
    };

  addCourse(){
    this.router.navigate(['courses/addCourse'])

  };
  editCourse(editCourse: Course){
    this.router.navigate(['courses/editCourse',editCourse])
  }
  deleteCourse(deleteCourse: Course){
    this.coursesService.deleteCoursesService(deleteCourse).subscribe((course:Course) => {
      this.courses$ = this.coursesService.getCourseListService()
    })
    console.log(deleteCourse)
  }
  redirectToEnrollment(){
    this.router.navigate(['inscriptions'])
  }
}
