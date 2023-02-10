import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../models/student';
import { EditStudentsListComponent } from '../edit-students-list/edit-students-list.component';

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
    lastName: 'Cabrera',
    age: 22,
    commission:23421,
    isActive: true
  };
  studentList: Array<Student> = [
    {
      name: 'Idana',
      lastName: 'Wagner',
      age: 30,
      commission: 32423,
      isActive: true
    },
    {
      name: 'Antonio',
      lastName: 'Gonzalez',
      age: 25,
      commission: 67577,
      isActive: true
    },
    {
      name: 'Dario',
      lastName: 'Lopez',
      age: 23,
      commission: 23423,
      isActive: false
    },
    {
      name: 'Raquel',
      lastName: 'Garcia',
      age: 32,
      commission: 76576,
      isActive: false
    },
  ];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.studentList);
  columns: string[] = ['name', 'age','commission', 'isActive', 'actions'];
  
  constructor(
    private dialog: MatDialog
  ){}

  openEdit(student: Student){
    const dialogRef = this.dialog.open(EditStudentsListComponent, {data: student})

  }
}

