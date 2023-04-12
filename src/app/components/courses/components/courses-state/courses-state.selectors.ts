import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCoursesState from './courses-state.reducer';

export const SelectCoursesState = createFeatureSelector<fromCoursesState.CoursesState>(
  fromCoursesState.coursesStateFeatureKey
);


export const SelectLoadCourses = createSelector(
  SelectCoursesState,
  (state: fromCoursesState.CoursesState) => state.loadingCourses
);

export const SelectLoadedCourses = createSelector(
  SelectCoursesState,
  (state: fromCoursesState.CoursesState) => state.courses
)

