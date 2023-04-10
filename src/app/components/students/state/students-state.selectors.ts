import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentsState from './students-state.reducer';

export const selectStudentsState = createFeatureSelector<fromStudentsState.StudentsState>(
  fromStudentsState.studentsStateFeatureKey
);

export const SelectLoadStudents = createSelector(
  selectStudentsState,
  (state: fromStudentsState.StudentsState)=> state.loadingStudents
);
export const SelectLoadedStudents = createSelector(
  selectStudentsState,
  (state: fromStudentsState.StudentsState)=> state.students
)
