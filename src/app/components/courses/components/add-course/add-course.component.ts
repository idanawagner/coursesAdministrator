import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  formAddCourse!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private courseService: CoursesService,
    private router: Router
  ) {}

  ngOnInit() {

      this.formAddCourse = this.fb.group({
        name: [''],
        professor: [''],
        commission: [''],
        startDate: [''],
        endDate: [''],
      });


  }
  addCourse(){
    let course:Course = {
      name : this.formAddCourse.value.name,
      professor : this.formAddCourse.value.professor,
      commission : this.formAddCourse.value.commission,
      startDate : this.formAddCourse.value.startDate,
      endDate : this.formAddCourse.value.endDate,
    }
    this.courseService.addCourseService(course),
    this.router.navigate(['courses/cards'])
  }

  cancelEdit(){
    this.router.navigate(['courses/cards'])
  }
}
