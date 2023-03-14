import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { EditStudentsListComponent } from './components/edit-students-list/edit-students-list.component';
import { StudentsComponent } from './components/students/students.component';



const routes: Routes = [
  { path: '', canActivateChild:[SessionGuard], children: [
    { path: 'list', component: StudentsComponent,  canActivate: [AdminGuard] },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRountingModule { }
