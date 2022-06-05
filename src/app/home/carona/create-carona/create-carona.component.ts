import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-carona',
  templateUrl: './create-carona.component.html',
  styleUrls: ['./create-carona.component.css']
})
export class CreateCaronaComponent implements OnInit {

  fase: number = 1;

  ponto_saida?: string;
  pontos_saida: string[] = [
    'Centro - Timóteo',
    'São José - Timóteo',
    'Centro - Coronel Fabriciano',
    'Amaro Lanari - Coronel Fabriciano',
    'Centro - Ipatinga',
    'Cariru - Ipatinga',
  ];

  ponto_chegada?: string;
  pontos_chegada: string[] = [
    'CEFET - Timóteo',
    'Unileste - Coronel Fabriciano',
  ];

  valor:number = 7.9;

  constructor() { }

  ngOnInit(): void {
  }

}
