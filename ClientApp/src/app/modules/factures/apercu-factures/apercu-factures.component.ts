import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactureService } from '../../../core/facture-service';
import { Facture } from '../../../models/facture.model';

@Component({
  selector: 'app-apercu-factures',
  templateUrl: './apercu-factures.component.html',
  styleUrls: ['./apercu-factures.component.css']
})
export class ApercuFacturesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private factureService: FactureService) { }

  facture!: Facture;

  id !: number ;

  ngOnInit(): void {
    this.id = Number( this.route.snapshot.paramMap.get('id')!);

    this.factureService.getFactureById( this.id ).subscribe(
      (data) => {
       this.facture = data
      })
  }

}
