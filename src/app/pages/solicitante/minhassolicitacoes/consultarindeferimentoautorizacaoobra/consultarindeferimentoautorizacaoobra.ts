import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';

@Component({
  selector: 'app-consultarindeferimentoautorizacaoobra',
  imports: [RouterLink, Breadcrumb, Cabecalhosolicitacao],
  templateUrl: './consultarindeferimentoautorizacaoobra.html',
  styleUrl: './consultarindeferimentoautorizacaoobra.css'
})
export class Consultarindeferimentoautorizacaoobra {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
    { text: 'Consultar Notificação de Indeferimento da Autorização de Obra', address: '' }
  ];
}
