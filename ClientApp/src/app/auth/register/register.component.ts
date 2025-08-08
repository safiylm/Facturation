import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private userService: UserService) { }



  user = {
    Nom: '',
    Prenom: '',
    Email: '',
    Password: '',
    Adresse: '',
    Phone: "",
    CreatedAt: new Date()
  };

  ngOnInit(): void {
  }

  register() {
    this.userService.create(this.user).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
