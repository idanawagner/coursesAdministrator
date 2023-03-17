import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CoursesService } from './courses.service';
import { Course } from 'src/app/shared/models/course';
import { of } from 'rxjs';

describe('CoursesService', () => {
  let service: CoursesService;
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CoursesService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('return array', (done: DoneFn) =>{
    let newDate= new Date();
    const dateMock: Array<Course> = [
      {
       "name": "Angular",
       "professor": "professor 1",
       "commission": 78,
       "startDate": newDate,
       "endDate": newDate,
       "openEnrollment": true,
       "idCourse": "1",
      },
      {
       "name": "Java",
       "professor": "professor 3",
       "commission": 59,
       "startDate": newDate,
       "endDate": newDate,
       "openEnrollment": true,
       "idCourse": "3"
      },
      {
       "name": "SQL",
       "professor": "professor 7",
       "commission": 89,
       "startDate": newDate,
       "endDate": newDate,
       "openEnrollment": false,
       "idCourse": "7"
      },
      {
       "name": "Javascript",
       "professor": "professor 8",
       "commission": 51,
       "startDate": newDate,
       "endDate": newDate,
       "openEnrollment": false,
       "idCourse": "8"
      },
      {
       "name": ".NET ",
       "professor": "Martina Suris",
       "commission": 34223,
       "startDate": newDate,
       "endDate": newDate,
       "openEnrollment": true,
       "idCourse": "9"
      },
      {
       "name": "Vue Js",
       "professor": "Julian Alavera",
       "commission": 32412,
       "startDate": newDate,
       "endDate": newDate,
       "openEnrollment": true,
       "idCourse": "10"
      }
     ];
     httpClientSpy.get.and.returnValue(of(dateMock));
     service.getCourseListService().subscribe((course: Array<Course>) => {
      expect(course).toEqual(dateMock);
      done()
     })
  })
});
