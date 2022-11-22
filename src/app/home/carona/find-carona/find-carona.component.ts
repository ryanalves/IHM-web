import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-find-carona',
    templateUrl: './find-carona.component.html',
    styleUrls: ['./find-carona.component.css'],
})
export class FindCaronaComponent implements OnInit {
    usuario: any;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.$usuario.subscribe((usuario) => {
            this.usuario = usuario;
        });
    }
}
