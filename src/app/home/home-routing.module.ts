import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CreateCaronaComponent } from './carona/create-carona/create-carona.component';
import { FindCaronaComponent } from './carona/find-carona/find-carona.component';
import { PesquisarCaronaComponent } from './carona/pesquisar-carona/pesquisar-carona.component';
import { ViewCaronaComponent } from './carona/view-carona/view-carona.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { DetalhesComponent } from './perfil/detalhes/detalhes.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'caronas', component: FindCaronaComponent },
            { path: 'pesquisar-carona', component: PesquisarCaronaComponent },
            { path: 'oferecer-carona', component: CreateCaronaComponent },
            // { path: 'view-carona', component: ViewCaronaComponent },
            { path: 'view-carona/:id', component: ViewCaronaComponent },
        ],
    },
    {
        path: 'perfil',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: '/perfil/caronas', pathMatch: 'full' },
            { path: 'caronas', component: DetalhesComponent },
            { path: 'detalhes', component: DetalhesComponent },
        ],
    },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
