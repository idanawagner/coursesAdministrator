import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';


const routes: Routes = [
  { path: '', canActivateChild:[SessionGuard], children: [
    { path: 'cards', component: CourseListComponent },
    { path: 'editCourse', component: EditCourseComponent, canActivate: [AdminGuard] },
    { path: 'addCourse', component: AddCourseComponent, canActivate: [AdminGuard] },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRountingModule { }
