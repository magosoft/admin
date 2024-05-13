import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NgClass, TopbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  containerClass() {
    return {};
  }
}
