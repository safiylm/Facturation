import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user-service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "jean@example.com";
  password = "";

  constructor(private userService: UserService) { }

  liste !: User[];
  resultat = "";

  ngOnInit(): void {

    this.userService.getUsers().subscribe((liste) => {
      this.liste = liste;
      console.log(liste)
    });
  }

  login() {
    console.log("email: ", this.email, ", password :", this.password)
    this.userService.login(this.email, this.password).subscribe(
      (data) => {
        if(data)
        console.log(data);
      }
    )
  }


}
