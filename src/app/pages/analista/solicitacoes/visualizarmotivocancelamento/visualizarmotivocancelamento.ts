import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-visualizarmotivocancelamento',
  imports: [RouterLink, Breadcrumb],
  templateUrl: './visualizarmotivocancelamento.html',
  styleUrl: './visualizarmotivocancelamento.css'
})
export class Visualizarmotivocancelamento {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Consultar Justificativa de Cancelamento de Solicitação', address: '' }
  ];
}
