import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../layout/breadcrumb/breadcrumb';
import { CommonModule, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-detalharpendencia',
  imports: [RouterLink, Breadcrumb, CommonModule, NgSwitchCase],
  templateUrl: './detalharpendencia.html',
  styleUrl: './detalharpendencia.css'
})
export class Detalharpendencia {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Relatório de Conformidades', address: '/analista/relatorioconformidades/' },
    { text: 'Detalhar Validação', address: '' }
  ];

  itemsHistorico = [
    {
      status: 1,
      CPFResponsavel: '097.135.597-90',
      dataHoraValidacao: '13/07/2024 11:23',
      dataHoraParecer: '31/02/2025 12:56',
      parecer: '',
      outrasInformacoes: '',
      justificativa: ''
    }
  ]
}
