import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-visualizarautorizacaoobra',
  imports: [Cabecalhosolicitacao, Breadcrumb, RouterLink],
  templateUrl: './visualizarautorizacaoobra.html',
  styleUrl: './visualizarautorizacaoobra.css'
})
export class Visualizarautorizacaoobra {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
    { text: 'Visualizar Autorização de Obra', address: '' }
  ];

  imprimir(): void {
    window.print();
  }
}
