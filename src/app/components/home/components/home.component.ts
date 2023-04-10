import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/course';
import { SelectLoadCourses, SelectLoadedCourses } from '../../courses/components/courses-state/courses-state.selectors';
import { CoursesService } from '../../courses/services/courses.service';
import { loadCoursesStates, loadedCourses } from '../../courses/components/courses-state/courses-state.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = false;
  courses$!: Observable<Array<Course>>;
  loading$!: Observable<boolean>;
  coursesList!: Array<Course>;


  constructor (
    private coursesStore: Store<Course>,
    private router: Router,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.loading$ = this.coursesStore.select(SelectLoadCourses);
    this.coursesStore.dispatch(loadCoursesStates());

    this.courses$ = this.coursesStore.select(SelectLoadedCourses);
    this.courses$.subscribe(courses => {
      this.coursesList = courses;
    });
  }
  idx = 0
  index(index: any){
    this.idx = this.idx + index
  }

  redirectToLogin(): void {
    this.router.navigate(['login']);
  }

}
