import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-visualizartituloemitido',
  imports: [Cabecalhosolicitacao, Breadcrumb, RouterLink],
  templateUrl: './visualizartituloemitido.html',
  styleUrl: './visualizartituloemitido.css'
})
export class Visualizartituloemitido {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
   { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Visualizar Título Emitido', address: '' }
  ];

  imprimir(): void {
    window.print();
  }
}
