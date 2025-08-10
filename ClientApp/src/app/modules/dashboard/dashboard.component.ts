import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {


  nbClients = localStorage.getItem("nbClients")
  factureEnAttente = localStorage.getItem("factureEnAttente")
  total = localStorage.getItem("totalFacture")

  constructor(private route: Router) { }
  logout() {
    localStorage.setItem("isLoggedIn", "false")
    localStorage.setItem('userId', '');
    localStorage.removeItem('userId')
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

}
