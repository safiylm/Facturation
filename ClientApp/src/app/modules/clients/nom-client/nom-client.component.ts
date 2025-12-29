import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../../../core/client-service';

@Component({
  selector: 'app-nom-client',
  templateUrl: './nom-client.component.html',
  styleUrls: ['./nom-client.component.css']
})
export class NomClientComponent implements OnInit {

  @Input() id: number = 13;
  constructor(private clientService: ClientService) { }
  nom = ""

  ngOnInit(): void {
    this.clientService.getClientById(Number(this.id)).subscribe(
      (data) => {
        if (data) {
          this.nom = data.prenom + " " + data.nom
        }
      }
    )
  }

}
