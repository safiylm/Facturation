import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrls: ['./create-facture.component.css']
})
export class CreateFactureComponent implements OnInit {

  constructor() { }
  clientchoix ="create"
  clientId = ""
  ngOnInit(): void {
  }

  addItem(newItem: string) {
    this.clientId = newItem
  }
}
