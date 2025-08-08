//MODEL CLIENT
export class Client {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public email: string,
    public entreprise: string ,
    public adresse: string,
    public phone: string,
    public auteurId: number,

  ) { }
}
