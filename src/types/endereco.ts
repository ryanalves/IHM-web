export interface IEndereco {
    id: number;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero: string;
    cep: string;
}
export class Endereco implements IEndereco {
    id: number;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero: string;
    cep: string;

    constructor(id: number, endereco: string, bairro: string, cidade: string, estado: string, numero: string, cep: string) {
        this.id = id;
        this.endereco = endereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.numero = numero;
        this.cep = cep;
    }

    static build(endereco: any): Endereco {
        return new Endereco(endereco.id, endereco.endereco, endereco.bairro, endereco.cidade, endereco.estado, endereco.numero, endereco.cep);
    }
}
