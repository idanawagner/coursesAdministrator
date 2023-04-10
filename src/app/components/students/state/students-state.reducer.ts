import { createFeature, createReducer, on } from '@ngrx/store';
import * as StudentsStateActions from './students-state.actions';
import { Student } from 'src/app/shared/models/student';

export const studentsStateFeatureKey = 'studentsState';

export interface StudentsState {
  loadingStudents: boolean;
  students: Array<Student>;
}

export const initialState: StudentsState = {
  loadingStudents: false,
  students: [],
};

export const reducer = createReducer(
  initialState,
  on(StudentsStateActions.loadStudentsStates, (state) => {
    return  {...state, loadingStudents: true}}),

  on(StudentsStateActions.loadedStudents, (state, {students}) => {
    return  {...state, loadingStudents: false, students}}),

  on(StudentsStateActions.addStudentState, (state, {student: Student}) => {
    return  state
  }),

  on(StudentsStateActions.editStudentState, (state, {student: Student}) => {
    return  state
  }),

  on(StudentsStateActions.deleteStudentState, (state, {student: Student}) => {
    return  state
  }),

);

export const studentsStateFeature = createFeature({
  name: studentsStateFeatureKey,
  reducer,
});

