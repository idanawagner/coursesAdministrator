import * as fromStudentsState from './students-state.reducer';
import { SelectStudentsState } from './students-state.selectors';

describe('StudentsState Selectors', () => {
  it('should select the feature state', () => {
    const newDate = new Date();
    const studentsState = {
      loadingStudents: false,
      students: [
        {
          name: 'Idana',
          lastName: 'Wagner',
          age: 30,
          isActive: true,
          courseEnrolled: {
            name: 'name 1',
            professor: 'professor 1',
            commission: 43,
            startDate: newDate,
            endDate: newDate,
            openEnrollment: false,
            idCourse: '1',
          },
          idStudent: '1',
        },
        {
          name: 'Carlos',
          lastName: 'Nares',
          age: 32,
          isActive: true,
          courseEnrolled: {
            name: 'name 2',
            professor: 'professor 2',
            commission: 25,
            startDate: newDate,
            endDate: newDate,
            openEnrollment: false,
            idCourse: '2',
          },
          idStudent: '2',
        },
        {
          name: 'Mariana',
          lastName: 'Lopez',
          age: 20,
          isActive: false,
          courseEnrolled: {
            name: 'name 1',
            professor: 'professor 1',
            commission: 43,
            startDate:newDate,
            endDate: newDate,
            openEnrollment: false,
            idCourse: '1',
          },
          idStudent: '3',
        }
      ]
    };
    const result = SelectStudentsState({
      [fromStudentsState.studentsStateFeatureKey]: studentsState
    });

    expect(result).toEqual(studentsState);
  });
});
