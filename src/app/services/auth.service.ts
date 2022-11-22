import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public readonly $usuario = new BehaviorSubject<any>(null);

    constructor(private apiService: ApiService, private router: Router) {
        if (localStorage.getItem('access_token')) {
            this.$usuario.next({
                nome: localStorage.getItem('nome'),
                email: localStorage.getItem('email'),
                cnh: localStorage.getItem('cnh'),
            });
        }
    }

    async buscarUsuario() {
        try {
            let res: any = await this.apiService.get('auth', {});
            return { success: true, usuario: res };
        } catch (error) {
            throw error;
        }
    }

    async cadastro(credenciais: any) {
        try {
            let res: any = await this.apiService.post(
                'auth/cadastro',
                credenciais,
            );
            localStorage.setItem('access_token', res.access_token);
            localStorage.setItem('email', res.email);
            localStorage.setItem('nome', res.nome);
            localStorage.setItem('cnh', res.cnh);
            this.$usuario.next({
                nome: localStorage.getItem('nome'),
                email: localStorage.getItem('email'),
                cnh: localStorage.getItem('cnh'),
            });
            return { success: true };
        } catch (error) {
            throw error;
        }
    }

    async editar(dados: any) {
        try {
            let res: any = await this.apiService.post(
                'auth/editar',
                dados,
            );
            localStorage.setItem('email', res.email);
            localStorage.setItem('nome', res.nome);
            localStorage.setItem('cnh', res.cnh);
            this.$usuario.next({
                nome: localStorage.getItem('nome'),
                email: localStorage.getItem('email'),
                cnh: localStorage.getItem('cnh'),
            });
            return { success: true };
        } catch (error) {
            throw error;
        }
    }

    async login(credenciais: { email: string; senha: string }) {
        try {
            let res: any = await this.apiService.post(
                'auth/login',
                credenciais,
            );
            localStorage.setItem('access_token', res.access_token);
            localStorage.setItem('email', res.email);
            localStorage.setItem('nome', res.nome);
            localStorage.setItem('cnh', res.cnh);
            console.log(res);

            this.$usuario.next({
                nome: localStorage.getItem('nome'),
                email: localStorage.getItem('email'),
                cnh: localStorage.getItem('cnh'),
            });
            return { success: true };
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        localStorage.clear();
        this.$usuario.next(null);
        this.router.navigate(['/']);
    }
}
