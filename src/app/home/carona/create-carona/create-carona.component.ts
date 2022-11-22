import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CaronaService } from 'src/app/services/carona.service';

@Component({
  selector: 'app-create-carona',
  templateUrl: './create-carona.component.html',
  styleUrls: ['./create-carona.component.css'],
})
export class CreateCaronaComponent implements OnInit {
  caronaForm = new FormGroup({
    saida: new FormControl(''),
    saidaHorario: new FormControl(''),
    chegada: new FormControl(''),
    chegadaHorario: new FormControl(''),
    valor: new FormControl(''),
  });

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

  valor: number = 7.9;

  constructor(private caronaService: CaronaService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.caronaForm.value);
    this.caronaService.create(this.caronaForm.value).then(res => {
      this.router.navigate(["/pesquisar-carona"])
    });
    
  }
}
