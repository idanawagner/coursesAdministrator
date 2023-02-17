import { Component, Inject, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Student } from '../../../../models/student';
import { EditStudentsListComponent } from '../edit-students-list/edit-students-list.component';
import { Configuration } from 'src/app/models/configuration';
import { token } from 'src/app/config';
import { Subscription } from 'rxjs';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit, OnDestroy {
  title: string = 'Student List';

  studentList!: Array<Student>;
  subscription!: Subscription;
  dataSource!: MatTableDataSource<Student>;
  @ViewChild(MatTable) table!: MatTable<Student>;
  columns: string[] = ['name', 'age', 'commission', 'isActive', 'actions'];

  constructor(
    private dialog: MatDialog,
    private studentsService: StudentsService,
    @Inject(token) private config: Configuration
  ) {}
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Student>();
    this.subscription = this.studentsService
      .getStudentListObservable()
      .subscribe((students: Array<Student>) => {
        this.dataSource.data = students;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  editStudent(student: Student) {
    const dialogRef = this.dialog.open(EditStudentsListComponent, {
      data: student,
    });
    dialogRef.afterClosed().subscribe((result) => {
      let obj = {
        name: result.name,
        lastName: result.lastName,
        age: parseInt(result.age),
        commission: parseInt(result.commission),
        isActive: result.isActive,
      };

      this.studentsService.editStudentService(obj, student);
    });
  }

  addStudent() {
    let obj: Student;
    const dialogRef = this.dialog.open(EditStudentsListComponent, {
      data: '',
    });
    dialogRef.afterClosed().subscribe((result) => {
      obj = {
        name: result.name,
        lastName: result.lastName,
        age: parseInt(result.age),
        commission: parseInt(result.commission),
        isActive: result.isActive,
      };
      return this.studentsService.addStudentService(obj);
    });
  }

  deleteStudent(data: Student) {
   this.studentsService.deleteStudentService(data)
  }
}
