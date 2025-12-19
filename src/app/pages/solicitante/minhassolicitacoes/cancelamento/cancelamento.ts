import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

declare const core: any;

@Component({
  selector: 'app-cancelamento',
  imports: [RouterLink, Breadcrumb],
  templateUrl: './cancelamento.html',
  styleUrl: './cancelamento.css'
})
export class Cancelamento {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
    { text: 'Cancelamento de Solicitação', address: '' }
  ];

  ngOnInit(): void {
    const accordionList = []
    for (const brAccordion of window.document.querySelectorAll('.br-accordion')) {
      accordionList.push(Object.create(new core.BRAccordion('br-accordion', brAccordion)))
    }
  }
}
