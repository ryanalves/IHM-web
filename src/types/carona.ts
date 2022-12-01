import * as dayjs from 'dayjs';
import { Usuario } from './usuario';

export interface ICarona {
    id: number;
    saida: string;
    saidaHorario: Date;
    chegada: string;
    chegadaHorario: Date;
    valor: number;
}

export class Carona implements ICarona {
    id: number;
    saida: string;
    saidaHorario: Date;
    chegada: string;
    chegadaHorario: Date;
    valor: number;
    motorista?: Usuario;
    passageiros: Usuario[];

    constructor(id: number, saida: string, saidaHorario: Date, chegada: string, chegadaHorario: Date, valor: number, motorista: Usuario | undefined, passageiros: Usuario[]) {
        this.id = id;
        this.saida = saida;
        this.saidaHorario = saidaHorario;
        this.chegada = chegada;
        this.chegadaHorario = chegadaHorario;
        this.valor = valor;
        this.motorista = motorista;
        this.passageiros = passageiros;
    }

    static build(carona: any): Carona {
        let motorista = Usuario.build(carona.motorista);
        let passageiros = [];
        if (carona?.passageiros) {
            passageiros = carona.passageiros.map(Usuario.build);
        }
        let saidaHorario;
        if (carona.saidaHorario) {
            saidaHorario = new Date(carona.saidaHorario);
        } else {
            saidaHorario = new Date();
        }
        let chegadaHorario;
        if (carona.chegadaHorario) {
            chegadaHorario = new Date(carona.chegadaHorario);
        } else {
            chegadaHorario = new Date();
        }
        return new Carona(carona.id, carona.saida, saidaHorario, carona.chegada, chegadaHorario, carona.valor, motorista, passageiros);
    }

    parseSaidaHorario() {
        return this.converterData(this.saidaHorario);
    }
    parseChegadaHorario() {
        return this.converterData(this.chegadaHorario);
    }

    private converterData(date: Date) {
        let dateObj = dayjs(date);
        return dateObj.format('HH:mm (DD/MM)');
    }
}
