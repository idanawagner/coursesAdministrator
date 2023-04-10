 import { createFeature, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/shared/models/course';
import * as CoursesStateActions from './courses-state.actions';

export const coursesStateFeatureKey = 'coursesState';

export interface CoursesState {
  loadingCourses: boolean;
  courses: Array<Course>;
}

export const initialState: CoursesState = {
  loadingCourses: false,
  courses: [],
};

export const reducer = createReducer(
  initialState,
  on(CoursesStateActions.loadCoursesStates, (state) => {
    return {...state, loadingCourses:true}
  }),

  on(CoursesStateActions.loadedCourses, (state, { courses }) => {
    return {...state, loadingCourses:false, courses}
  }),

  on(CoursesStateActions.addCourseState, (state, { course: Course }) => {
    return state
  }),

  on(CoursesStateActions.editCourseState, (state, { course: Course }) => {
    return state
  }),

  on(CoursesStateActions.deleteCourseState, (state, { course: Course }) => {
    return state
  })
);

export const coursesStateFeature = createFeature({
  name: coursesStateFeatureKey,
  reducer,
});
