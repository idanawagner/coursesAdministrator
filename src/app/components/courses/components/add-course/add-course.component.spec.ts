import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesService } from '../../services/courses.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AddCourseComponent } from './add-course.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCourseComponent],
      imports: [SharedModule, AppModule],
      providers: [ CoursesService],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form add course component validations', () => {
    const newDate = new Date()
    const formAddCourse = component.formAddCourse;
    const name = formAddCourse.controls['name'];
    const professor = formAddCourse.controls['professor'];
    const commission = formAddCourse.controls['commission'];
    const startDate = formAddCourse.controls['startDate'];
    const endDate = formAddCourse.controls['endDate'];
    const openEnrollment = formAddCourse.controls['openEnrollment'];

    name.setValue('Angular');
    professor.setValue('Jose');
    commission.setValue(32334);
    startDate.setValue(newDate);
    endDate.setValue(newDate);
    openEnrollment.setValue(false);

    expect(formAddCourse.valid).toBeTrue();
  });
});
