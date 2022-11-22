import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { AuthService } from 'src/app/services/auth.service';
dayjs.locale('pt-br');
import { CaronaService } from 'src/app/services/carona.service';

@Component({
    selector: 'app-view-carona',
    templateUrl: './view-carona.component.html',
    styleUrls: ['./view-carona.component.css'],
})
export class ViewCaronaComponent implements OnInit {
    constructor(private authService: AuthService, private caronaService: CaronaService, private route: ActivatedRoute) {}

    usuario: any;
    carona: any;

    reserva = false;

    ngOnInit() {
        this.authService.$usuario.subscribe((usuario) => {
            this.usuario = usuario;
            console.log(usuario);
            
        });
        const caronaId = this.route.snapshot.paramMap.get('id');
        if (caronaId) {
            this.caronaService
                .findOne(+caronaId)
                .then((res) => {
                    console.log(res);
                    this.carona = res;
                    this.reserva = this.habilitarReserva();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    habilitarReserva() {
        if (!this.usuario) {
            return false;
        }
        if (this.carona) {
            if (this.carona?.motorista?.email == this.usuario?.email) {
                return false;
            }
            if (this.carona?.passageiros?.find((p: any) => p?.email == this.usuario?.email)) {
                return false;
            }
        }
        return true;
    }

    formatarData(dateString: any) {
        if (dateString) {
            let date = dayjs(dateString).format('dddd,[ ]DD[ de ]MMMM');
            return date.charAt(0).toUpperCase() + date.slice(1);
        }
        return '';
    }

    formatarHorario(dateString: any) {
        if (dateString) {
            return dayjs(dateString).format('HH:mm');
        }
        return '';
    }

    reservar() {
        const caronaId = this.route.snapshot.paramMap.get('id');
        if (caronaId) {
            this.caronaService
                .reservar(+caronaId)
                .then((res) => {
                    console.log(res);
                    this.carona = res;
                    this.reserva = this.habilitarReserva();
                })
                .catch((err) => {
                    console.log(err);
                    alert(err.error.message);
                });
        }
    }
}
