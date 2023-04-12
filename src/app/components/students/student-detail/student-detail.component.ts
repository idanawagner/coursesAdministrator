import { Component, Input, OnInit } from '@angular/core';
import { StudentsState } from '../state/students-state.reducer';
import { Store } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { Student } from 'src/app/shared/models/student';
import { SelectLoadStudents, SelectLoadedStudents } from '../state/students-state.selectors';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent implements OnInit {
  loading$!: Observable<Boolean>;
  students$!: Observable<Array<Student>>;
  studentDetail!: FormGroup

  constructor(
    private studentStore: Store<StudentsState>,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.loading$ = this.studentStore.select(SelectLoadStudents);
    this.students$ = this.studentStore.select(SelectLoadedStudents)
    this.activatedRoute.paramMap.subscribe((params) => {
      // this.students$.subscribe((stud) =>{
      // let id = params.get('idStudent')?.toString() || ''
      // console.log(id)

        this.studentDetail = this.fb.group({
          idStudent: params.get('idStudent'),
          name: params.get('name'),
          lastName: params.get('lastName'),
          age: +(params.get('age') || ''),
          courseEnrolled: JSON.stringify(params.getAll('courseEnrolled') || '') ,
          isActive: [params.get('isActive')],
        })

      })
    console.log(this.studentDetail)

  }
}
