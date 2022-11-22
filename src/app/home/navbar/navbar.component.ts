import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  usuario: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.$usuario.subscribe((usuario) => {
      this.usuario = usuario;
      console.log(usuario);
      
    });
  }

  logout() {
    this.authService.logout();
  }
}
