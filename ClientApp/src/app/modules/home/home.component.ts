import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {
 nbClients = localStorage.getItem("nbClients")
 factureEnAttente = localStorage.getItem("factureEnAttente")
  total = localStorage.getItem("totalFacture")

  constructor( private route: Router) { }
  logout() {
    localStorage.setItem("isLoggedIn", "false")
    localStorage.setItem('userId', '');
    localStorage.removeItem('userId')
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }
}
