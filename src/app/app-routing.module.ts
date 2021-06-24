import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFountdComponent } from './components/errors/page-not-fountd/page-not-fountd.component';
import { PatientsComponent } from './components/patients/patients.component';

const routes: Routes = [
  { path:'patients', component: PatientsComponent },
  { path:'**', component: PageNotFountdComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
