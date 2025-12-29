//MODEL CLIENT
export class Client {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public email: string,
    public adresse: string,
    public phone: string,
    public auteurId: number,
  
    public raisonSocial: string,
    public numeroTVA: string,
    public siret: number,
  ) { }
}
