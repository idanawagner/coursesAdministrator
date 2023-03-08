import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, from, map, Observable, of } from 'rxjs';
import { Course } from 'src/app/models/course';
import { Student } from 'src/app/models/student';

@Injectable()
export class StudentsService {
  private studentList: Array<Student> = [
    {
      name: 'Idana',
      lastName: 'Wagner',
      age: 30,
      commission: 32423,
      isActive: true,
    },
    {
      name: 'Antonio',
      lastName: 'Gonzalez',
      age: 25,
      commission: 67577,
      isActive: true,
    },
    {
      name: 'Dario',
      lastName: 'Lopez',
      age: 23,
      commission: 23423,
      isActive: false,
    },
    {
      name: 'Raquel',
      lastName: 'Garcia',
      age: 32,
      commission: 76576,
      isActive: false,
    },
  ];

  private students$!: BehaviorSubject<Array<Student>>;

  constructor() {
    this.students$ = new BehaviorSubject(this.studentList);

    of(this.studentList).pipe(
      map((students: Array<Student>) => {
        return console.log(students)})

    ).subscribe((stud) => {})

  }

  getStudentListObservable(): Observable<Array<Student>> {
    return this.students$.asObservable();
  }

  addStudentService(student: Student) {
    this.studentList.push(student);
    this.students$.next(this.studentList);
  }
  editStudentService(obj: Student, student:Student ) {

    from(this.studentList).subscribe((res) => {
      if(res.name == student.name){
        let idx = this.studentList.indexOf(res);
        this.studentList[idx] = obj;
      }
      })

    this.students$.next(this.studentList);
  }

  deleteStudentService(data: Student){
    let idx = this.studentList.indexOf(data);
    this.studentList.splice(idx,1)
    this.students$.next(this.studentList);

  }

}
