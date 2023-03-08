import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  editCourse!: FormGroup
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(){
    this.createForm()
  }
  createForm(){
    this.editCourse = this.fb.group({
      name: [''],
      professor: [''],
      commission: [''],
      startDate:[''],
      endDate: ['']

      })

  }
}
