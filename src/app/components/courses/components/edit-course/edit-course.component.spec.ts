import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { map, pipe } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { Course } from 'src/app/shared/models/course';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesService } from '../../services/courses.service';

import { EditCourseComponent } from './edit-course.component';

describe('EditCourseComponent', () => {
  let component: EditCourseComponent;
  let fixture: ComponentFixture<EditCourseComponent>;
  let coursesService: CoursesService;
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCourseComponent],
      imports: [
        SharedModule,
        AppModule,
      HttpClientTestingModule],
      providers: [CoursesService],
    }).compileComponents();
    httpClientSpy = jasmine.createSpyObj('httpClient', ['get']);
    coursesService = new CoursesService(httpClientSpy as any)

    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form valid',() => {
    const formEditCourse = component.formEditCourse;
    const name = formEditCourse.controls['name'];
    const professor = formEditCourse.controls['professor'];
    const commission = formEditCourse.controls['commission'];
    const startDate = formEditCourse.controls['startDate'];
    const endDate = formEditCourse.controls['endDate'];
    const openEnrollment = formEditCourse.controls['openEnrollment'];
    const newDate = new Date();

    name.setValue('Javascript');
    professor.setValue('Julieta Rodriguez');
    commission.setValue(43323);
    startDate.setValue(newDate);
    endDate.setValue(newDate);
    openEnrollment.setValue(true);

    expect(formEditCourse.valid).toBeTrue();

  });

});
