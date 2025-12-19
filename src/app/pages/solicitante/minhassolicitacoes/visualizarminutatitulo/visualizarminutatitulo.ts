import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-visualizarminutatitulo',
  imports: [Cabecalhosolicitacao, Breadcrumb, RouterLink],
  templateUrl: './visualizarminutatitulo.html',
  styleUrl: './visualizarminutatitulo.css'
})
export class Visualizarminutatitulo {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
    { text: 'Visualizar Minuta do Título', address: '' }
  ];

  imprimir(): void {
    window.print();
  }
}
