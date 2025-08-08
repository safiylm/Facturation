import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/user-service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "jean@example.com";
  password = "jean@example.com";

  constructor(private userService: UserService,
    private route: Router) { }


  liste !: User[];
  resultat = "";

  ngOnInit(): void {

  }

  login() {

    this.userService.login(this.email, this.password).subscribe(
      (data: any) => {
        if (data) {
          this.resultat = data.message
          if (data.success == true) {
            localStorage.setItem('userId', data.utilisateur.id);
            localStorage.setItem('isLoggedIn', "true");
            this.route.navigate(['/']);

          }
        }
      }
    )
  }


}
