import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Osoba } from '../../models/osoba.class';
import { CommonModule } from '@angular/common';
import { PodswietlanieDirective } from '../podswietlanie.directive';

@Component({
  selector: 'app-osoba',
  imports: [CommonModule, PodswietlanieDirective],
  templateUrl: './osoba.component.html',
  styleUrl: './osoba.component.css'
})
export class OsobaComponent {
 @Input() osoba!:Osoba;
 @Output() zmianaWyroznienia = new EventEmitter<Osoba>();


  czyNajechano = false;
 constructor(){
  this.osoba = new Osoba("Jan", "Kowalski",30,false);
 }

 onWyroznijClick(): void{
  this.zmianaWyroznienia.emit(this.osoba);
 }
}
