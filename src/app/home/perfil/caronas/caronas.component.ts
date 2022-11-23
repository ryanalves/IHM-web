import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { AuthService } from 'src/app/services/auth.service';
import { CaronaService } from 'src/app/services/carona.service';

@Component({
    selector: 'app-caronas',
    templateUrl: './caronas.component.html',
    styleUrls: ['./caronas.component.css'],
})
export class CaronasComponent implements OnInit {
    constructor(private authService: AuthService, private caronaService: CaronaService) {}

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
                caronas: this.authService.$usuario.value.email,
            })
            .then((res) => {
                console.log(res);
                this.caronas = res;
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
