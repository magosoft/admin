import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private overlayOpen: any;
  private state: any;
  private config: any;
  public descriptionLogo: any;
  constructor() {
    this.overlayOpen = new Subject<any>();
    this.descriptionLogo = 'LOGO';
    this.config = signal<any>({
      menuMode: 'static'
    });
    this.state = {
      staticMenuDesktopInactive: false,
      overlayMenuActive: false,
      profileSidebarVisible: false,
      configSidebarVisible: false,
      staticMenuMobileActive: false,
      menuHoverActive: false,
    };
  }
  onMenuToggle(): void {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isMobile()) {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    } else {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    }
  }

  isMobile(): boolean {
    return window.innerWidth <= 991;
  }

  isDesktop(): boolean {
    return !this.isMobile();
  }

  isProfileSidebarVisible(): boolean {
    return this.state.profileSidebarVisible;
  }

  isOverlay(): boolean {
    return this.config().menuMode === 'overlay';
  }

  showProfileSidebar() {
    throw new Error('Method not implemented.');
  }
}
