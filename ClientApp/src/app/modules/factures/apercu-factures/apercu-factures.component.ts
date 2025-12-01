import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactureService } from '../../../core/facture-service';
import { Facture } from '../../../models/facture.model';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-apercu-factures',
  templateUrl: './apercu-factures.component.html',
  styleUrls: ['./apercu-factures.component.css']
})

export class ApercuFacturesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private factureService: FactureService) { }

  facture!: Facture;

  id !: number;

  download() {

    const data = document.getElementById('facture');
    html2canvas(data!).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('facture' + this.facture.id + '.pdf'); // Save the generated PDF
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);

    this.factureService.getFactureById(this.id).subscribe(
      (data) => {
        this.facture = data
        // if (data == null) {
        //   location.href = '/'
        // }
      })

  }

  delete() {
    this.factureService.delete(this.id).subscribe(
      (data) => {
        if (data) {
          if (data == '{"message":"Facture is deleted with success."}')
            location.href = '/'
        }
      })
  }

}
