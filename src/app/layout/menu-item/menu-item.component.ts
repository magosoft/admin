import { NgClass } from '@angular/common';
import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuItemService } from './menu-item.service';

@Component({
  selector: '[app-menu-item]',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit, OnDestroy {


  @Input()
  public item: any;

  @Input()
  public index: number = 0;

  @Input()
  @HostBinding('class.layout-root-menuitem')
  public root!: boolean;

  @Input()
  public parentKey!: string;

  public key: string;
  public active;
  private menuSourceSubscription: Subscription;

  constructor(private menuService: MenuItemService) {
    this.key = '';
    this.active = false;

    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(value => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = (value.key === this.key || value.key.startsWith(this.key + '-')) ? true : false;
        }
        else {
          if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
            this.active = false;
          }
        }
      });
    });

  }
  get submenuAnimation() {
    return this.root ? 'expanded' : (this.active ? 'expanded' : 'collapsed');
  }
  onItemClick($event: MouseEvent) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    if (this.item.routerLink) {
      //this.updateActiveStateFromRoute();
    }
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
