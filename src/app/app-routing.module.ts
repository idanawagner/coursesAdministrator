import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { HomeComponent } from './components/home/components/home.component';
import { LoginComponent } from './components/login/components/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentsComponent } from './components/students/components/students/students.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'courses', loadChildren: () => import('./components/courses/courses.module').then((mod) => mod.CoursesModule)},
  {path: 'home', loadChildren: () => import('./components/home/home.module').then((mod) => mod.HomeModule)},
  {path: 'students', loadChildren: () => import('./components/students/students.module').then((mod) => mod.StudentsModule)},
  {path: 'login', loadChildren: () => import('./components/login/login.module').then((mod) => mod.LoginModule)},
  {path: 'inscriptions', loadChildren: () => import('./components/inscriptions/inscriptions.module').then((mod) => mod.InscriptionsModule)},
  {path: '**', component: NotFoundComponent },
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
