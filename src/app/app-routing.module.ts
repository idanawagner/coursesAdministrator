import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { HomeComponent } from './components/home/components/home.component';
import { LoginComponent } from './components/login/components/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentsComponent } from './components/students/components/students/students.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'students', component: StudentsComponent },
  {path: '**', component: NotFoundComponent },
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
