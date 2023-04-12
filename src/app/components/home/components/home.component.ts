import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/course';
import { SelectLoadCourses, SelectLoadedCourses } from '../../courses/components/courses-state/courses-state.selectors';
import { CoursesService } from '../../courses/services/courses.service';
import { loadCoursesStates } from '../../courses/components/courses-state/courses-state.actions';
import { CourseState } from 'src/app/shared/models/course.state';
import { LoginState } from '../../login/login.state/login-state.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = false;
  courses$!: Observable<Array<Course>>;
  loading$!: Observable<boolean>;
  coursesList!: Array<Course>;
  activeSession$!: Observable<Boolean>

  constructor (
    private coursesStore: Store<CourseState>,
    private loginStore: Store<LoginState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loading$ = this.coursesStore.select(SelectLoadCourses);
    this.coursesStore.dispatch(loadCoursesStates());

    this.courses$ = this.coursesStore.select(SelectLoadedCourses);
    this.courses$.subscribe(courses => {
      this.coursesList = courses;
    });
  }

  redirectToEnrollment(): void {

      this.router.navigate(['inscriptions/signUp']);

  }

}
