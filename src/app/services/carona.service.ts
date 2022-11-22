import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CaronaService {
    public readonly $usuario = new BehaviorSubject<any>(null);

    constructor(private apiService: ApiService, private router: Router) {}

    async find(options: any) {
        return await this.apiService.post('carona/find', options);
    }

    async findOne(id: number) {
        return await this.apiService.get(`carona/${id}`);
    }

    async create(carona: any) {
        return await this.apiService.post('carona', carona);
    }

    async reservar(id: number) {
        return await this.apiService.post(`carona/reservar/${id}`);
    }
}
