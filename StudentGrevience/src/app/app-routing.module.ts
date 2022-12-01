import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectDbComponent } from './connect-db/connect-db.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuardService } from './guards/loginguard.service';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,canActivate:[LoginGuardService] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'login',component:LoginComponent},
  { path: 'students', component: ConnectDbComponent ,canActivate:[LoginGuardService] },
  { path: 'detail/:id', component: StudentdetailComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
