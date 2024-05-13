import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  public items:any;
  constructor(public layoutService: LayoutService) { }
}
