export class Osoba{
    imie: string;
    nazwisko: string;
    wiek:number;
    czyWyrozniona: boolean;

    constructor(imie: string, nazwisko: string, wiek: number, czWyrozniona: boolean){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
        this.czyWyrozniona = czWyrozniona;
    }
}