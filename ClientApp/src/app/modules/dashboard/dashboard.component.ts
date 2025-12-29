import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  nbClients = localStorage.getItem("nbClients")
  factureEnAttente = localStorage.getItem("factureEnAttente")
  total = localStorage.getItem("totalFacture")


  logout() {
    localStorage.setItem("isLoggedIn", "false")
    localStorage.setItem('userId', '');
    localStorage.setItem('username', '');
    localStorage.removeItem('username');
    localStorage.removeItem('userId')
    location.href = "auth/login"

  }

}
