import * as fromCoursesState from './courses-state.reducer';
import { SelectCoursesState } from './courses-state.selectors';

describe('CoursesState Selectors', () => {
  it('should select the feature state', () => {
    const newDate = new Date();
    const coursesState = {
      loadingCourses: false,
      courses: [
        {
          name: "name 1",
          professor: "professor 1",
          commission: 43,
          startDate: newDate,
          endDate: newDate,
          openEnrollment: false,
          idCourse: "1"
         },
         {
          name: "name 2",
          professor: "professor 2",
          commission: 25,
          startDate: newDate,
          endDate: newDate,
          openEnrollment: false,
          idCourse: "2"
         },
         {
          name: "name lalalala",
          professor: "professor 5",
          commission: 13,
          startDate: newDate,
          endDate: newDate,
          openEnrollment: false,
          idCourse: "5"
         }
      ]
    };

    const result = SelectCoursesState({
      [fromCoursesState.coursesStateFeatureKey]: coursesState
    });

    expect(result).toEqual(coursesState);
  });
});
