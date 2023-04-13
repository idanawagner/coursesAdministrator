import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditStudentsListComponent } from '../edit-students-list/edit-students-list.component';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/models/student';
import { Session } from 'src/app/shared/models/session';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LoginState } from 'src/app/components/login/login.state/login-state.reducer';
import { Store } from '@ngrx/store';
import { SelectSessionState } from 'src/app/components/login/login.state/login-state.selectors';
import { StudentsState } from '../../state/students-state.reducer';
import { addStudentState, deleteStudentState, editStudentState, loadStudentsStates } from '../../state/students-state.actions';
import { SelectLoadStudents, SelectLoadedStudents} from '../../state/students-state.selectors';
import { Router } from '@angular/router';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  title: string = 'Student List';
  loading$!: Observable<Boolean>;
  students$!: Observable<Array<Student>>;
  dataSource!: MatTableDataSource<Student>;
  @ViewChild(MatTable) table!: MatTable<Student>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columns: string[] = [
    'name',
    'age',
    'courseEnrolled',
    'commission',
    'isActive',
    'actions',
  ];
  session$!: Observable<Session>;

  constructor(
    private dialog: MatDialog,
    private loginStore: Store<LoginState>,
    private studentsStore: Store<StudentsState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading$ = this.studentsStore.select(SelectLoadStudents);
    this.dataSource = new MatTableDataSource<Student>();
    this.session$ = this.loginStore.select(SelectSessionState);
    this.studentsStore.dispatch(loadStudentsStates());
    this.students$ = this.studentsStore.select(SelectLoadedStudents);
    this.students$.subscribe((students) => {
      this.dataSource.data = students;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
        courseEnrolled: result.courseEnrolled,
        isActive: result.isActive,
      };
      this.studentsStore.dispatch(editStudentState({ student: editStudent }));
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
        courseEnrolled: result.courseEnrolled,
        isActive: result.isActive,
      };
      this.studentsStore.dispatch(addStudentState({ student: addStudent }));
    });
  }

  deleteStudent(deleteStudent: Student) {
    this.studentsStore.dispatch(deleteStudentState({ student: deleteStudent }));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  redirectToStudentDetail(student: Student) {
    this.router.navigate(['students/detail', student]);
  }
}
