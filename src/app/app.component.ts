import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SideNavComponent) matSidenav: SideNavComponent;
  
  title = 'Asclepios';

  toggleMenu() {
    this.matSidenav.toggle();
  }
}
