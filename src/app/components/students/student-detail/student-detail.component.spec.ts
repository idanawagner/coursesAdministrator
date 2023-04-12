import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailComponent } from './student-detail.component';
import { StoreModule } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('StudentDetailComponent', () => {
  let component: StudentDetailComponent;
  let fixture: ComponentFixture<StudentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailComponent ],
      imports: [
        SharedModule,
        AppModule,
        StoreModule.forRoot({})
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
