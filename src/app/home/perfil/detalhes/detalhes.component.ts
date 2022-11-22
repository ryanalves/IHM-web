import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-detalhes',
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {}

    tipoUsuario: '' | '1' | '2' = '';

    detalhesForm = new FormGroup({
        email: new FormControl(''),
        nomeCompleto: new FormControl(''),
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
    });

    ngOnInit(): void {
        this.detalhesForm.get('email')?.disable();
        this.authService
            .buscarUsuario()
            .then((res) => {
                let usuario = res.usuario;

                this.detalhesForm.get('email')?.setValue(usuario.email);
                this.detalhesForm.get('nomeCompleto')?.setValue(usuario.nomeCompleto);
                this.detalhesForm.get('senha')?.setValue(usuario.senha);

                if (usuario?.motorista?.cnh || usuario?.motorista?.modeloVeiculo || usuario?.motorista?.placaVeiculo) {
                    this.tipoUsuario = '1';
                    this.detalhesForm.get('motorista.cnh')?.setValue(usuario?.motorista?.cnh);
                    this.detalhesForm.get('motorista.modeloVeiculo')?.setValue(usuario?.motorista?.modeloVeiculo);
                    this.detalhesForm.get('motorista.placaVeiculo')?.setValue(usuario?.motorista?.placaVeiculo);
                }

                this.detalhesForm.get('endereco.endereco')?.setValue(usuario?.endereco?.endereco);
                this.detalhesForm.get('endereco.bairro')?.setValue(usuario?.endereco?.bairro);
                this.detalhesForm.get('endereco.cidade')?.setValue(usuario?.endereco?.cidade);
                this.detalhesForm.get('endereco.estado')?.setValue(usuario?.endereco?.estado);
                this.detalhesForm.get('endereco.numero')?.setValue(usuario?.endereco?.numero);
                this.detalhesForm.get('endereco.cep')?.setValue(usuario?.endereco?.cep);
                console.log(this.detalhesForm.value);

                // this.router.navigate(['/']);
            })
            .catch((err) => {
                // console.log(err);
                // alert(err.error.message);
            });
    }

    onSubmit() {
        console.log(this.detalhesForm.value);

        if (this.detalhesForm.valid) {
            this.authService
                .editar(this.detalhesForm.value)
                .then((res) => {
                    alert('Sucesso');
                })
                .catch((err) => {
                    console.log(err);
                    alert(err.error.message);
                });
        }
    }
}
