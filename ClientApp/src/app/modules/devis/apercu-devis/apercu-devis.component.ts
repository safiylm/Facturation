import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Deviservice } from 'src/app/core/devis-service';
import { Devis } from 'src/app/models/devis.model';

@Component({
  selector: 'app-apercu-devis',
  templateUrl: './apercu-devis.component.html',
  styleUrls: ['./apercu-devis.component.css']
})
export class ApercuDevisComponent implements OnInit {


  constructor(private route: ActivatedRoute, private deviservice: Deviservice) { }

  devis!: Devis;
  id !: number;
  result !: any;
  loading = false;
  error = '';

  download() {

    const data = document.getElementById('devis');
    html2canvas(data!).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('facture' + this.devis.id + '.pdf'); // Save the generated PDF
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);

    this.deviservice.getDevisById(this.id).subscribe(
      (data) => {
        this.devis = data
      })

  }

  delete() {
    this.loading = true;
    this.error = '';
    this.result = null;

    this.deviservice.delete(this.id).subscribe({
      next: (data: any) => {
        console.log(data)
        if (data.message == "Devis & Produit is deleted with success.") {
          this.result = "Devis supprimé avec succès"
          this.loading = false;
          setTimeout(() => {
            location.href = '/'
          }, 2000)
        }
      }
      ,
      error: (err) => {
        this.error = 'Erreur lors de la requête POST';
        this.loading = false;
      }
    }
    )
  }

}