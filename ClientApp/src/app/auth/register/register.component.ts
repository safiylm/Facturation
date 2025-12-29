import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  result !: any;
  loading = false;
  error = '';

  user = {
    Nom: 'Yilmaz',
    Prenom: 'Ayhan',
    Email: 'ayhanelec@gmail.com',
    Password: '123',
    Adresse: '12 rue jean moulin, france',
    Phone: "0708050608",
    RaisonSocial: "Ayhan Electricité",
    NumeroTVA: "FR1233",
    SIRET: "123",
    CreatedAt: new Date()
  };

  ngOnInit(): void {
  }

  register() {
    this.loading = true;
    this.error = '';
    this.result = null;

    if (this.user.Nom != "" &&
      this.user.Prenom != "" &&
      this.user.Email != "" &&
      this.user.Password != "" &&
      this.user.Adresse != "" &&
      this.user.Phone != ""
    )
      this.userService.create(this.user).subscribe(
        {
          next: (data: any) => {
            if (data.message == "User Created with success") {
              this.loading = false;
              this.result = data.message
              localStorage.setItem('userId', data.user.id);
              localStorage.setItem('username', data.user.prenom + " " + data.user.nom);
              localStorage.setItem('isLoggedIn', "true");
              setTimeout(() => {
                location.href = "/"
              }, 1500)
            }
          }
          ,
          error: (err) => {
            this.error = 'Erreur lors de la requête POST';
            this.loading = false;
          },
        }
      )
  }

}
