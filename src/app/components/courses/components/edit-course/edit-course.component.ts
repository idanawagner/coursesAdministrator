import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/course';
import { CoursesService } from '../../services/courses.service';
import { CourseState } from 'src/app/shared/models/course.state';
import { Store } from '@ngrx/store';
import { deleteCourseState, editCourseState } from '../courses-state/courses-state.actions';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  formEditCourse!: FormGroup;
  isChecked!:boolean;
  courses$!: Observable<Array<Course>>
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private courseService: CoursesService,
    private router: Router,
    private coursesStore: Store<CourseState>
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.formEditCourse = this.fb.group({
        idCourse: [params.get('idCourse')],
        name: [params.get('name')],
        professor: [params.get('professor')],
        commission: [+(params.get('commission') || '')],
        startDate: [new Date(params.get('startDate') || '')],
        endDate: [new Date(params.get('endDate') || '')],
        openEnrollment: [params.get('openEnrollment'), ]
      });
      this.isChecked= this.formEditCourse.value.openEnrollment
    });
  }
  editCourse(){
    let editCourse:Course = {
      idCourse: this.formEditCourse.value.idCourse,
      name : this.formEditCourse.value.name,
      professor : this.formEditCourse.value.professor,
      commission : this.formEditCourse.value.commission,
      startDate : this.formEditCourse.value.startDate,
      endDate : this.formEditCourse.value.endDate,
      openEnrollment: this.formEditCourse.value.openEnrollment
    }
    this.coursesStore.dispatch(editCourseState({course: editCourse}))
  }

  cancelEdit(){
    this.router.navigate(['courses/cards'])
  }
}
