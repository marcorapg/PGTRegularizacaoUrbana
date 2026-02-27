import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';

declare const core: any;

@Component({
  selector: 'app-historicosolicitacao',
  imports: [RouterLink, Breadcrumb, Cabecalhosolicitacao],
  templateUrl: './historicosolicitacao.html',
  styleUrl: './historicosolicitacao.css'
})
export class Historicosolicitacao {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes' },
    { text: 'Histórico da Solicitação', address: '' }
  ];

  ngAfterViewInit() {
    core?.init();
  }
}
