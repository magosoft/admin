import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './topbar.component.html'
})
export class TopbarComponent {
  constructor(public layoutService: LayoutService) {

  }
}
