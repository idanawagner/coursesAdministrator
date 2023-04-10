import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/shared/models/course';

export const loadCoursesStates = createAction(
  '[CoursesState] Load CoursesStates'
);

export const loadedCourses = createAction(
  '[CoursesState] Loaded Courses',
  props<{ courses: Array<Course> }>()
);

export const addCourseState = createAction(
  '[CourseState] Add Course',
  props<{course: Course}>()
)
export const editCourseState = createAction(
  '[CourseState] Edit Course',
  props<{course: Course}>()
)
export const deleteCourseState = createAction(
  '[CourseState] Delete Course',
  props<{course: Course}>()
)
