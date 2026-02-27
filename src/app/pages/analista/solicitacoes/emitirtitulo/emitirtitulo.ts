import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';


@Component({
  selector: 'app-emitirtitulo',
  imports: [Cabecalhosolicitacao, RouterLink, FormsModule, Breadcrumb],
  templateUrl: './emitirtitulo.html',
  styleUrl: './emitirtitulo.css'
})
export class Emitirtitulo {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Emitir Título', address: '' }
  ];

  imprimir(): void {
    window.print();
  }
}
