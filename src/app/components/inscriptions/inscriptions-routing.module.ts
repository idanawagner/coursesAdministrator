import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';

const routes: Routes = [
  { path: '',component: InscriptionsComponent, canActivateChild:[SessionGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionsRoutingModule { }
