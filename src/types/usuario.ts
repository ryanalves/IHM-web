import { Carona } from './carona';
import { Endereco } from './endereco';

export interface IMotorista {
    cnh: string;
    modeloVeiculo: string;
    placaVeiculo: string;
}

export interface IUsuario {
    id: number;
    motorista: Motorista;
    email: string;
    telefone: string;
    nomeCompleto: string;
    termos: boolean;
    endereco: Endereco;
    caronaOfertada?: Carona[];
}

export class Motorista implements IMotorista {
    cnh: string;
    modeloVeiculo: string;
    placaVeiculo: string;

    constructor(cnh: string, modeloVeiculo: string, placaVeiculo: string) {
        this.cnh = cnh;
        this.modeloVeiculo = modeloVeiculo;
        this.placaVeiculo = placaVeiculo;
    }

    static build(motorista: any): Motorista {
        return new Motorista(motorista.cnh, motorista.modeloVeiculo, motorista.placaVeiculo);
    }
}

export class Usuario implements IUsuario {
    id: number;
    motorista: Motorista;
    email: string;
    telefone: string;
    nomeCompleto: string;
    termos: boolean;
    endereco: Endereco;
    caronaOfertada?: Carona[];

    constructor(id: number, motorista: Motorista, email: string, telefone: string, nomeCompleto: string, termos: boolean, endereco: Endereco, caronaOfertada?: Carona[]) {
        this.id = id;
        this.motorista = motorista;
        this.email = email;
        this.telefone = telefone;
        this.nomeCompleto = nomeCompleto;
        this.termos = termos;
        this.endereco = endereco;
        this.caronaOfertada = caronaOfertada;
    }

    static build(usuario: any): Usuario {
        let motorista = Motorista.build(usuario.motorista);
        let caronaOfertada;
        if(usuario?.caronaOfertada) {
            caronaOfertada = usuario.caronaOfertada.map(Carona.build);
        }
        return new Usuario(usuario.id, motorista, usuario.email, usuario.telefone, usuario.nomeCompleto, usuario.termos, usuario.endereco, caronaOfertada);
    }
}
