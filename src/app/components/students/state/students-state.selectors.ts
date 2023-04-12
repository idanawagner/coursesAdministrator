import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentsState from './students-state.reducer';

export const SelectStudentsState = createFeatureSelector<fromStudentsState.StudentsState>(
  fromStudentsState.studentsStateFeatureKey
);

export const SelectLoadStudents = createSelector(
  SelectStudentsState,
  (state: fromStudentsState.StudentsState)=> state.loadingStudents
);
export const SelectLoadedStudents = createSelector(
  SelectStudentsState,
  (state: fromStudentsState.StudentsState)=> state.students
)
