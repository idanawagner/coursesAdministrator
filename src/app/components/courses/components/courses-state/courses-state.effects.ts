import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';

import { CoursesService } from '../../services/courses.service';
import { Course } from 'src/app/shared/models/course';
import * as CoursesStateActions from './courses-state.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CoursesStateEffects {
  loadCoursesStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesStateActions.loadCoursesStates),
      concatMap(() =>
        this.coursesService.getCourseListService().pipe(
            map((c: Array<Course>) =>
              CoursesStateActions.loadedCourses({ courses: c })
            )
          )
      )
    );
  });

  addCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesStateActions.addCourseState),
      concatMap(({ course }) => {
        return this.coursesService.addCourseService(course).pipe(
          map((course: Course) => {
            this.router.navigate(['courses/cards']);
            return CoursesStateActions.loadCoursesStates();
          })
        );
      })
    );
  });

  editCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesStateActions.editCourseState),
      concatMap(({ course }) => {
        return this.coursesService.editCourseService(course).pipe(
          map((course: Course) => {
            this.snackBar.open(`The course ${course.name} was successfully edited`);
            this.router.navigate(['courses/cards']);
            return CoursesStateActions.loadCoursesStates();
          })
        );
      })
    );
  });

  deleteCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesStateActions.deleteCourseState),
      concatMap(({ course }) => {
        return this.coursesService.deleteCoursesService(course).pipe(
          map((course: Course) => {
            this.snackBar.open(`The course ${course.name}was successfully removed`);
            this.router.navigate(['courses/cards']);
            return CoursesStateActions.loadCoursesStates();
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
}
