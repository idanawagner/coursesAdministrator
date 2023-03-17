import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { StudentsService } from './students.service';
import { Student } from 'src/app/shared/models/student';
import { of } from 'rxjs';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpClientSpy: {get: jasmine.Spy}


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentsService]
    });
    service = TestBed.inject(StudentsService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new StudentsService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('return array', (done: DoneFn) =>{
    let newDate= new Date();
    const dateMock: Array<Student> = [
      {
       "name": "Idana",
       "lastName": "Wagner",
       "age": 30,
       "isActive": true,
       "courseEnrolled": {
        "name": "Java",
        "professor": "professor 3",
        "commission": 59,
        "startDate": newDate,
        "endDate": newDate,
        "openEnrollment": false,
        "idCourse": "3"
       },
       "idStudent": "1"
      },
      {
       "name": "Joaquin",
       "lastName": "Martinez",
       "age": 20,
       "isActive": true,
       "courseEnrolled": {
        "name": "Angular",
        "professor": "professor 1",
        "commission": 78,
        "startDate": newDate,
        "endDate": newDate,
        "openEnrollment": true,
        "idCourse": "1"
       },
       "idStudent": "2"
      },
      {
       "name": "Marcela",
       "lastName": "Rodriguez",
       "age": 25,
       "isActive": false,
       "courseEnrolled": {
        "name": "Vue Js",
        "professor": "professor 4",
        "commission": 91,
        "startDate": newDate,
        "endDate": newDate,
        "openEnrollment": false,
        "idCourse": "4"
       },
       "idStudent": "3"
      }
     ];
     httpClientSpy.get.and.returnValue(of(dateMock));
     service.getStudentListObservable().subscribe((course: Array<Student>) => {
      expect(course).toEqual(dateMock);
      done()
     })
  })
});
