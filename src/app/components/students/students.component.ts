import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Student } from '../../models/student';
import { EditStudentsListComponent } from '../edit-students-list/edit-students-list.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  title: string = 'Student List';

  studentList: Array<Student> = [
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
  dataSource = [...this.studentList];
  @ViewChild(MatTable) table!: MatTable<Student>;
  columns: string[] = ['name', 'age', 'commission', 'isActive', 'actions'];

  constructor(private dialog: MatDialog, public dataService: DataService) {}

  openEdit(student: Student) {
    const dialogRef = this.dialog.open(EditStudentsListComponent, {
      data: student,
    });

    dialogRef.afterClosed().subscribe(result => {
      let obj = {
       name: result.name,
       lastName: result.lastName,
       age: parseInt(result.age),
       commission: parseInt(result.commission),
       isActive: result.isActive ,
      }

      this.dataSource.forEach((element) => {
          if (element.name == student.name) {
            let idx = this.dataSource.indexOf(element);
            this.dataSource[idx] = obj;
          }
        });
        this.table.renderRows();
    });
  }
  addData() {
    const dialogRef = this.dialog.open(EditStudentsListComponent, {
      data: '',
    });
    dialogRef.afterClosed().subscribe(result => {
      let obj = {
       name: result.name,
       lastName: result.lastName,
       age: parseInt(result.age),
       commission: parseInt(result.commission),
       isActive: result.isActive ,
      }
      this.dataSource.push(obj);
      this.table.renderRows();
    });
  }

  removeData(data: Student) {
    let idx = this.dataSource.indexOf(data);
    this.dataSource.splice(idx,1)
    this.table.renderRows();
    idx = 0
  }
}
