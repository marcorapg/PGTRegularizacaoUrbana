import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-sucesso',
  imports: [RouterLink, Breadcrumb],
  templateUrl: './sucesso.html',
  styleUrl: './sucesso.css'
})
export class Sucesso {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Criação de Solicitação de Título de Regularização Fundiária Urbana', address: '/solicitante/criarsolicitacao/' }
  ];
}
