import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';

declare const core: any;

@Component({
  selector: 'app-consultarindeferimento',
  imports: [RouterLink, Breadcrumb, Cabecalhosolicitacao],
  templateUrl: './consultarindeferimento.html',
  styleUrl: './consultarindeferimento.css'
})
export class Consultarindeferimento {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
    { text: 'Consultar Notificação de Indeferimento da Solicitação', address: '' }
  ];

  ngOnInit(): void {
    const accordionList = []
    for (const brAccordion of window.document.querySelectorAll('.br-accordion')) {
      accordionList.push(Object.create(new core.BRAccordion('br-accordion', brAccordion)))
    }
  }
}
