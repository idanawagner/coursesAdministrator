import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { EditCourseComponent } from './components/edit-course/edit-course/edit-course.component';


const routes: Routes = [
  { path: 'courses', children: [
    { path: 'cards', component: CourseListComponent },
    { path: 'editCourse', component: EditCourseComponent },
    // { path: 'add', component: AgregarCursoComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRountingModule { }
