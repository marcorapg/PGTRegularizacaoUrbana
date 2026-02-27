import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';

@Component({
  selector: 'app-visualizarmotivoindeferimento',
  imports: [RouterLink, Breadcrumb, Cabecalhosolicitacao],
  templateUrl: './visualizarmotivoindeferimento.html',
  styleUrl: './visualizarmotivoindeferimento.css'
})
export class Visualizarmotivoindeferimento {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Consultar Notificação de Indeferimento da Solicitação', address: '' }
  ];
}
