import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OsobaComponent } from './osoba/osoba.component';
import {Osoba} from "../models/osoba.class"
import { LicznikComponent } from './licznik/licznik.component';
import { CommonModule } from '@angular/common';
import { PodswietlanieDirective } from './podswietlanie.directive';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OsobaComponent, LicznikComponent, CommonModule, PodswietlanieDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';

  osoby: Osoba[] =[
    new Osoba("Jan","Kowalski",30,false),
    new Osoba("Mateusz","Łatka",30,false),
    new Osoba("Jan","Guzy",30,false),
    new Osoba("Jan","ADDSAD",30,false),
    new Osoba("Jan","ADDSADSA",30,false),
  ];
  

  licznik = 0;

  wyswietlLicznik = true;

  onZmianaWyroznienia(event: Osoba): void {
    event.czyWyrozniona = !event.czyWyrozniona;
    if(event.czyWyrozniona) {this.licznik++}
    else {this.licznik--}
  }

}
