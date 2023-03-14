import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/components/courses/services/courses.service';
import { StudentsService } from 'src/app/components/students/services/students.service';
import { Course } from 'src/app/shared/models/course';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit  {
  isEditable = false;
  enrollmentForm!: FormGroup
  courses$!:Observable<Array<Course>>

  constructor(
    private coursesService: CoursesService,
    private studentsService: StudentsService
  ){}

  ngOnInit() {
    this.courses$ = this.coursesService.getCourseListService();
    this.enrollmentForm = new FormGroup({
      name: new FormControl('') ,
      lastName: new FormControl(''),
      age: new FormControl(''),
      courseEnrolled:new FormControl({}),
      isActive: new FormControl(true)

    });
  }

  enrolledToCourse(){
    let enrolled:Student = {
      idStudent: this.enrollmentForm.value.id,
      name : this.enrollmentForm.value.name,
      lastName : this.enrollmentForm.value.lastName,
      age : this.enrollmentForm.value.age,
      courseEnrolled: this.enrollmentForm.value.courseEnrolled,
      isActive: this.enrollmentForm.value.isActive,

    }
    console.log('add student', enrolled)

    this.studentsService.addStudentService(enrolled).subscribe((student:Student) =>{
      console.log('add student', enrolled)
    });
  }
}
