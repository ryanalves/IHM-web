import { Component, OnInit } from '@angular/core';
import { CaronaService } from 'src/app/services/carona.service';
import * as dayjs from 'dayjs';
import { Carona } from 'src/types/carona';

@Component({
    selector: 'app-pesquisar-carona',
    templateUrl: './pesquisar-carona.component.html',
    styleUrls: ['./pesquisar-carona.component.css'],
})
export class PesquisarCaronaComponent implements OnInit {
    constructor(private caronaService: CaronaService) {}

    vagas: number = 1;
    saida: string = '';
    chegada: string = '';
    filtro: 'saidaCedo' | 'saidaTarde' | 'precoBaixo' | 'precoAlto' = 'saidaCedo';

    caronas: any = [];

    ngOnInit(): void {
        this.pesquisar();
    }

    pesquisar() {
        this.caronaService
            .find({
                futuro: true,
                saida: this.saida,
                chegada: this.chegada,
                filtro: this.filtro,
                vagas: this.vagas,
            })
            .then((res) => {
                if (res && Array.isArray(res)) {
                    this.caronas = res.map(Carona.build);
                }
                console.log(this.caronas);
                
            });
    }

    mudarFiltro(filtro: 'saidaCedo' | 'saidaTarde' | 'precoBaixo' | 'precoAlto') {
        this.filtro = filtro;
        this.pesquisar();
    }
    converterData(date: string) {
        let dateObj = dayjs(date);
        // if (dateObj.isSame(dayjs(), 'day')) {
        //     return dateObj.format('HH:mm');
        // } else {
        // }
        return dateObj.format('HH:mm (DD/MM)');
    }
}
