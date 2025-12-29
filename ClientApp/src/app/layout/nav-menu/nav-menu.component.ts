import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isLoggedIn = false;
  userId = 0
  username !:string | undefined ;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    if (window.localStorage.getItem('isLoggedIn') == "true") {
      this.isLoggedIn = true;
      this.userId = Number(window.localStorage.getItem('userId'))
      this.username = localStorage.getItem('username')?.toString();

    } else {
      this.isLoggedIn = false;
    }

  }



}
