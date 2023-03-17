import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  formAddCourse!: FormGroup;
  courses$!: Observable<Array<Course>>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  ngOnInit() {

      this.formAddCourse = this.fb.group({
        name: ['',[Validators.required]],
        professor: ['',[Validators.required]],
        commission: ['',[Validators.required]],
        startDate: [''],
        endDate: [''],
        openEnrollment:['false']
      });


  }
  addCourse(){
    if (this.formAddCourse.valid){

      let course:Course = {
        idCourse: this.formAddCourse.value.idCourse,
        name : this.formAddCourse.value.name,
        professor : this.formAddCourse.value.professor,
        commission : this.formAddCourse.value.commission,
        startDate : this.formAddCourse.value.startDate,
        endDate : this.formAddCourse.value.endDate,
        openEnrollment: this.formAddCourse.value.openEnrollment
      }
      this.coursesService.addCourseService(course).subscribe((course:Course) =>{

        this.router.navigate(['courses/cards'])
      });
      this.courses$ = this.coursesService.getCourseListService()
    }

  }

  cancelAdd(){
    this.router.navigate(['courses/cards'])
  }
}
