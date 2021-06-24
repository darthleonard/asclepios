import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './components/devices/devices.component';
import { PageNotFountdComponent } from './components/errors/page-not-fountd/page-not-fountd.component';
import { HomeComponent } from './components/home/home.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PageNotFountdComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
