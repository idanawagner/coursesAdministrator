import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/course';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteCourseState, loadCoursesStates } from '../courses-state/courses-state.actions';
import { CourseState } from 'src/app/shared/models/course.state';
import { SelectLoadCourses, SelectLoadedCourses } from '../courses-state/courses-state.selectors';
import { LoginState } from 'src/app/components/login/login.state/login-state.reducer';
import { User } from 'src/app/shared/models/user';
import { SelectActiveSession, SelectActiveUser } from 'src/app/components/login/login.state/login-state.selectors';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses$!: Observable<Array<Course>>;
  activeSession$!: Observable<Boolean>;
  activeUser$!: Observable<User | undefined>;
  loading$!: Observable<Boolean>;

  constructor(
    private router: Router,
    private loginStore: Store<LoginState>,
    private coursesStore: Store<CourseState>
  ) {}

  ngOnInit() {
    this.loading$ = this.coursesStore.select(SelectLoadCourses);
    this.coursesStore.dispatch(loadCoursesStates());
    this.courses$ = this.coursesStore.select(SelectLoadedCourses);
    this.activeSession$ = this.loginStore.select(SelectActiveSession);
    this.activeUser$ = this.loginStore.select(SelectActiveUser);
  }

  redirectToaddCourse() {
    this.router.navigate(['courses/addCourse']);
  }
  redirectToeditCourse(editCourse: Course) {
    this.router.navigate(['courses/editCourse', editCourse]);
  }
  deleteCourse(deleteCourse: Course) {
    this.coursesStore.dispatch(deleteCourseState({course: deleteCourse}))

  }
  redirectToEnrollment() {
    this.router.navigate(['inscriptions/signUp']);
  }
}
