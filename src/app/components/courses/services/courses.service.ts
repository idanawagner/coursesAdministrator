import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/course';
import { config } from "src/app/environment/config";

@Injectable()
export class CoursesService {
  constructor(
    private http: HttpClient
  ) {

   }

  getCourseListService(): Observable<Array<Course>>{
    return this.http.get<Array<Course>>(`${config.urlAPI}/courses`);
  }

  addCourseService(addCourse: Course): Observable<Course> {
    return this.http.post<Course>(`${config.urlAPI}/courses`, addCourse);
  };

  editCourseService(editCourse:Course):Observable<Course>  {
    return this.http.put<Course>(`${config.urlAPI}/courses/${editCourse.idCourse}`,editCourse)
  };

  deleteCoursesService(deleteCourse: Course):Observable<Course> {
    return this.http.delete<Course>(`${config.urlAPI}/courses/${deleteCourse.idCourse}`);
  }

}
