import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {}

    tipoUsuario: any = '';

    cadastroForm = new FormGroup({
        email: new FormControl(''),
        telefone: new FormControl(''),
        nomeCompleto: new FormControl(''),
        senha: new FormControl(''),
        motorista: new FormGroup({
            cnh: new FormControl(''),
            modeloVeiculo: new FormControl(''),
            placaVeiculo: new FormControl(''),
        }),
        endereco: new FormGroup({
            endereco: new FormControl(''),
            bairro: new FormControl(''),
            cidade: new FormControl(''),
            estado: new FormControl(''),
            numero: new FormControl(''),
            cep: new FormControl(''),
        }),
        termos: new FormControl(false),
    });

    ngOnInit(): void {}

    onSubmit() {
        console.log(this.cadastroForm.value);

        if (this.cadastroForm.valid) {
            this.authService
                .cadastro(this.cadastroForm.value)
                .then((res) => {
                    console.log(res);
                    this.router.navigate(['/']);
                })
                .catch((err) => {
                    console.log(err);
                    alert(err.error.message);
                });
        }
    }
}
