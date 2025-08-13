import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../core/user-service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  id !: string;
  resultat = "";
  user !: User;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(Number(this.id)).subscribe(
      (user) => {
        this.user = user;
      }
    )
  }

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  edit() {
    this.userService.edit(this.user).subscribe(
      {
        next: (res) => {
          console.log(res); // ✅ { message: "..."}
          this.resultat = res.message + " ✅ ";
        },
        error: (err) => {
          console.error('Erreur API :', err);
        }
      })
  }

  delete() {
    if (confirm("Etes vous sur de supprimer?"))
      this.userService.delete(Number(this.id)).subscribe(
        {
          next: (res) => {
            console.log(res); // ✅ { message: "..."}
            this.resultat = res.message + " ✅ ";
          },
          error: (err) => {
            console.error('Erreur API :', err);
          }
        })
  }

}


