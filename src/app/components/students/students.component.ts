import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  title: string = "Student List";

  public searchStudent: any;

  variable1: number = 5;
  student1: Student = {
    name: 'Maria',
    age: 22,
    isActive: true
  };
  studentList: Array<Student> = [
    {
      name: 'Idana',
      age: 30,
      isActive: true
    },
    {
      name: 'Antonio',
      age: 25,
      isActive: true
    },
    {
      name: 'Dario',
      age: 23,
      isActive: false
    },
    {
      name: 'Raquel',
      age: 32,
      isActive: false
    },
  ];

}

