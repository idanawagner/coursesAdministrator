import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import * as StudentsStateActions from './students-state.actions';
import { StudentsService } from '../services/students.service';
import { Student } from 'src/app/shared/models/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class StudentsStateEffects {
  loadStudentsStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsStateActions.loadStudentsStates),
      concatMap(() =>
        this.studentsService.getStudentListObservable().pipe(
            map((s: Array<Student>) =>
              StudentsStateActions.loadedStudents({ students: s })
            )
          )
      )
    );
  });
  addStudentsStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsStateActions.addStudentState),
      concatMap(({ student }) => {
        return this.studentsService.addStudentService(student).pipe(
          map((s: Student) => {
            return StudentsStateActions.loadStudentsStates();
          })
        );
      })
    );
  });


  editStudentsStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsStateActions.editStudentState),
      concatMap(({student}) => {
        return this.studentsService.editStudentService(student).pipe(
          map((student: Student) => {
            return StudentsStateActions.loadStudentsStates()
          })
        )
      })
    );
  });
  deleteStudentsStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsStateActions.deleteStudentState),
      concatMap(({student}) => {
        return this.studentsService.deleteStudentService(student).pipe(
          map((student: Student) => {
            return StudentsStateActions.loadStudentsStates()
          })
        )
      }
      )
    );
  });

  constructor(
    private actions$: Actions,
    private studentsService: StudentsService
  ) {}
}
