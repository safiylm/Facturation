import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/user-service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = "azra@gmail.com";
  password = "123";

  constructor(private userService: UserService,
    private route: Router) { }

  liste !: User[];
  result !: any;
  loading = false;
  error = '';


  login() {
    this.loading = true;
    this.error = '';
    this.result = null;

    setTimeout(() => {
      this.userService.login(this.email, this.password).subscribe({
        next: (data: any) => {
          if (data) {
            this.loading = false;
            this.result = data.message
            if (data.success == true) {
              localStorage.setItem('userId', data.utilisateur.id);
              localStorage.setItem('username', data.utilisateur.prenom + " " + data.utilisateur.nom);
              localStorage.setItem('isLoggedIn', "true");
              setTimeout(() => {
                location.href = "/"
              }, 1500)
            }
          }
        },
        error: (err) => {
          this.error = 'Erreur lors de la requête POST';
          this.loading = false;
        },
      }
      )
    }, 1500)

  }

}
