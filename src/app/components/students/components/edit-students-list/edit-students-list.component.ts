import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/components/courses/services/courses.service';
import { Course } from 'src/app/shared/models/course';
import { Student } from 'src/app/shared/models/student';


@Component({
  selector: 'app-edit-students-list',
  templateUrl: './edit-students-list.component.html',
  styleUrls: ['./edit-students-list.component.css']
})
export class EditStudentsListComponent {
  editForm!: FormGroup;
  courses$!: Observable<Array<Course>>
  constructor(
    private dialogRef : MatDialogRef<EditStudentsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private router: Router,
    private courseService: CoursesService
  ){
  }
  ngOnInit(){
    this.courses$ = this.courseService.getCourseListService()
    this.editForm = new FormGroup({
      name : new FormControl(this.data.name),
      lastName: new FormControl(this.data.lastName),
      courseEnrolled: new FormControl(this.data.courseEnrolled),
      age : new FormControl(this.data.age),
      isActive : new FormControl(this.data.isActive)
    })
  }
  newFormSubmit(){
    this.data = this.editForm.value
    this.dialogRef.close(this.data)
  }
}
