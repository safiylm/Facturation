import { DatePipe } from "@angular/common";

//MODEL PRODUIT
export class Produit {
  constructor(
    public id: number,
    public quantite: number,
    public designation: string,
    public prixUnitaireHT: number,
    public TVA: number,
    public createdAt: Date| string ,
    public factureId: number,

  ) { }
}
