import { Component, Inject, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditStudentsListComponent } from '../edit-students-list/edit-students-list.component';
import { Configuration } from 'src/app/shared/models/configuration';
import { token } from 'src/app/environment/config';
import { Observable, Subscription } from 'rxjs';
import { StudentsService } from '../../services/students.service';
import { Student } from 'src/app/shared/models/student';
import { Session } from 'src/app/shared/models/session';
import { SessionService } from 'src/app/core/services/session.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  title: string = 'Student List';

  students$!: Observable<Array<Student>>
  subscription!: Subscription;
  dataSource!: MatTableDataSource<Student>;
  @ViewChild(MatTable) table!: MatTable<Student>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columns: string[] = ['name', 'age','courseEnrolled', 'commission', 'isActive', 'actions'];
  session$!: Observable<Session>

  constructor(
    private dialog: MatDialog,
    private studentsService: StudentsService,
    @Inject(token) private config: Configuration,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Student>();
    this.suscribeStudentList();
    this.session$ = this.sessionService.getSession();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  suscribeStudentList(){
    this.subscription = this.studentsService.getStudentListObservable().subscribe((students: Array<Student>) => {
      this.dataSource.data = students;
      });
  }

  editStudent(student: Student) {
    const dialogRef = this.dialog.open(EditStudentsListComponent, {
      data: student,
    });
    dialogRef.afterClosed().subscribe((result) => {
      let editStudent = {
        idStudent: student.idStudent,
        name: result.name,
        lastName: result.lastName,
        age: parseInt(result.age),
        courseEnrolled:result.courseEnrolled,
        isActive: result.isActive,
      };
      this.studentsService.editStudentService(editStudent).subscribe((student) =>{
        this.suscribeStudentList()
        });

    });
  }

  addStudent() {
    let addStudent: Student;
    const dialogRef = this.dialog.open(EditStudentsListComponent, {
      data: '',
    });
    dialogRef.afterClosed().subscribe((result) => {
      addStudent = {
        idStudent: result.idStudent,
        name: result.name,
        lastName: result.lastName,
        age: parseInt(result.age),
        courseEnrolled: result.courseEnrolled ,
        isActive: result.isActive,
      };
      this.studentsService.addStudentService(addStudent).subscribe((student:Student) =>{
        this.suscribeStudentList()
      });
    });
  }

  deleteStudent(deleteStudent: Student) {
   this.studentsService.deleteStudentService(deleteStudent).subscribe((student:Student) => {

     this.suscribeStudentList()
   });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
