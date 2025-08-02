//MODEL USER
export class User {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public email: string,
    public password: string,
    public adresse: string,
    public phone: string,

  ) { }
}
