import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';

@Component({
  selector: 'app-consultarinstrucoesretirada',
  imports: [RouterLink, Breadcrumb, Cabecalhosolicitacao],
  templateUrl: './consultarinstrucoesretirada.html',
  styleUrl: './consultarinstrucoesretirada.css'
})
export class Consultarinstrucoesretirada {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
    { text: 'Consultar Instruções de Retirada do Título', address: '' }
  ];
}
