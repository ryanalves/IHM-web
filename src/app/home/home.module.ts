import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateCaronaComponent } from './carona/create-carona/create-carona.component';
import { FindCaronaComponent } from './carona/find-carona/find-carona.component';
import { FooterComponent } from './footer/footer.component';
import { PesquisarCaronaComponent } from './carona/pesquisar-carona/pesquisar-carona.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { ViewCaronaComponent } from './carona/view-carona/view-carona.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    CreateCaronaComponent,
    FindCaronaComponent,
    FooterComponent,
    PesquisarCaronaComponent,
    LoginComponent,
    CadastroComponent,
    ViewCaronaComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TypeaheadModule,
    FormsModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
