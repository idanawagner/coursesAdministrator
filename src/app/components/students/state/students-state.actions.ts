import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/shared/models/student';

export const loadStudentsStates = createAction(
  '[StudentsState] Load StudentsStates'
);


export const loadedStudents = createAction(
  '[StudentsState] Loaded Students',
  props<{students: Array<Student>}>()
);

export const addStudentState= createAction(
  '[StudentsState] Add Student',
  props<{ student: Student}>()
);

export const editStudentState = createAction(
  '[StudentsState] Edit Student',
  props<{ student: Student}>()
);
export const deleteStudentState = createAction(
  '[StudentsState] Delete Student',
  props<{ student: Student}>()
);




