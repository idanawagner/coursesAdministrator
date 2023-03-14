import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { config } from 'src/app/environment/config';
import { Student } from 'src/app/shared/models/student';

@Injectable()
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudentListObservable(): Observable<Array<Student>> {
    return this.http
      .get<Array<Student>>(`${config.urlAPI}/students`, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          encoding: 'UTF-8',
        }),
      })
      .pipe(catchError(this.captureError));
  }

  addStudentService(student: Student): Observable<Student> {
    return this.http
      .post<Student>(`${config.urlAPI}/students`, student, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          encoding: 'UTF-8',
        }),
      })
      .pipe(catchError(this.captureError));
  }

  editStudentService(editStudent: Student): Observable<Student> {
    return this.http
      .put<Student>(
        `${config.urlAPI}/students/${editStudent.idStudent}`, editStudent,
        {
          headers: new HttpHeaders({
            'content-type': 'application/json',
            encoding: 'UTF-8',
          }),
        }
      )
      .pipe(catchError(this.captureError));
  }

  deleteStudentService(deleteStudent: Student): Observable<Student> {
    return this.http
      .delete<Student>(`${config.urlAPI}/students/${deleteStudent.idStudent}`, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          encoding: 'UTF-8',
        }),
      })
      .pipe(catchError(this.captureError));
  }

  private captureError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      alert(`Error: ${error.message}`);
    } else {
      alert(`Error2: ${error.message}`);
    }
    return throwError(() => new Error('Error in process students'));
  }
}
