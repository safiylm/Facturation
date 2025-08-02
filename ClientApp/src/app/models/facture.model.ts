//MODEL FACTURE
export class Facture {
  constructor(
    public id: number,
    public clientId: number,
    public userId: number,

    public titre: string,
    public totalTVA: number,
    public totalHT: number,
    public informations: string,

    public createdAt: Date,
               
  ) { }
}
