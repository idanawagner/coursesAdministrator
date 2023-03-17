import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesService } from 'src/app/components/courses/services/courses.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { InscriptionsComponent } from './inscriptions.component';
import { of } from 'rxjs';
import { Course } from 'src/app/shared/models/course';
import { StudentsService } from 'src/app/components/students/services/students.service';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule } from 'src/app/app.module';

describe('InscriptionsComponent', () => {
  let component: InscriptionsComponent;
  let fixture: ComponentFixture<InscriptionsComponent>;
  let service: CoursesService;
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsComponent ],
      imports:[
        SharedModule,
        HttpClientTestingModule,
        AppModule
      ],
      providers: [
        CoursesService,
        StudentsService
      ]
    })
    .compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CoursesService(httpClientSpy as any)
    fixture = TestBed.createComponent(InscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
