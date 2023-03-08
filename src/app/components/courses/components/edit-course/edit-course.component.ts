import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  formEditCourse!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private courseService: CoursesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.formEditCourse = this.fb.group({
        name: [params.get('name')],
        professor: [params.get('professor')],
        commission: [+(params.get('commission') || '')],
        startDate: [new Date(params.get('startDate') || '')],
        endDate: [new Date(params.get('endDate') || '')],
      });
    });

  }
  editCourse(){
    let course:Course = {
      name : this.formEditCourse.value.name,
      professor : this.formEditCourse.value.professor,
      commission : this.formEditCourse.value.commission,
      startDate : this.formEditCourse.value.startDate,
      endDate : this.formEditCourse.value.endDate,
    }
    this.courseService.editCourseService(course),
    this.router.navigate(['courses/cards'])
  }

  cancelEdit(){
    this.router.navigate(['courses/cards'])
  }
}
