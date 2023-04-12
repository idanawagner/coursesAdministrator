import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCoursesStates } from 'src/app/components/courses/components/courses-state/courses-state.actions';
import { SelectLoadedCourses } from 'src/app/components/courses/components/courses-state/courses-state.selectors';
import { LoginState } from 'src/app/components/login/login.state/login-state.reducer';
import { SelectActiveSession } from 'src/app/components/login/login.state/login-state.selectors';
import { addStudentState } from 'src/app/components/students/state/students-state.actions';
import { StudentsState } from 'src/app/components/students/state/students-state.reducer';
import { Course } from 'src/app/shared/models/course';
import { CourseState } from 'src/app/shared/models/course.state';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css'],
})
export class InscriptionsComponent implements OnInit {
  isEditable = true;
  enrollmentForm!: FormGroup;
  courses$!: Observable<Array<Course>>;
  activeSession$!: Observable<Boolean>;

  constructor(
    private coursesStore: Store<CourseState>,
    private studentsStore: Store<StudentsState>,
    private loginStore: Store<LoginState>,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeSession$ = this.loginStore.select(SelectActiveSession)
    this.coursesStore.dispatch(loadCoursesStates());
    this.courses$ = this.coursesStore.select(SelectLoadedCourses);
    this.enrollmentForm = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
      courseEnrolled: new FormControl({}),
      isActive: new FormControl(true),
    });
  }

  enrolledToCourse() {
    let enrolled: Student = {
      idStudent: this.enrollmentForm.value.id,
      name: this.enrollmentForm.value.name,
      lastName: this.enrollmentForm.value.lastName,
      age: this.enrollmentForm.value.age,
      courseEnrolled: this.enrollmentForm.value.courseEnrolled,
      isActive: this.enrollmentForm.value.isActive,
    };
    this.studentsStore.dispatch(addStudentState({ student: enrolled }));
    this.snackBar.open(`Thank you ${enrolled.name} for enrolling in the ${enrolled.courseEnrolled?.name} course`);
    this.enrollmentForm.reset()
    this.router.navigate(['home'])
  }
}
