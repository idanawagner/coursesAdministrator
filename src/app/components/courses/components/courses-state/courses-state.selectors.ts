import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCoursesState from './courses-state.reducer';

export const selectCoursesState = createFeatureSelector<fromCoursesState.CoursesState>(
  fromCoursesState.coursesStateFeatureKey
);


export const SelectLoadCourses = createSelector(
  selectCoursesState,
  (state: fromCoursesState.CoursesState) => state.loadingCourses
);

export const SelectLoadedCourses = createSelector(
  selectCoursesState,
  (state: fromCoursesState.CoursesState) => state.courses
)

