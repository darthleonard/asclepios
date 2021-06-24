import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFountdComponent } from './components/errors/page-not-fountd/page-not-fountd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DevicesComponent } from './components/devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFountdComponent,
    SideNavComponent,
    ToolbarComponent,
    HomeComponent,
    SchedulerComponent,
    SettingsComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
