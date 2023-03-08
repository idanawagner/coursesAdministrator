import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';


const routes: Routes = [
  { path: 'courses', children: [
    { path: 'cards', component: CourseListComponent },
    { path: 'editCourse', component: EditCourseComponent },
    { path: 'addCourse', component: AddCourseComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRountingModule { }
