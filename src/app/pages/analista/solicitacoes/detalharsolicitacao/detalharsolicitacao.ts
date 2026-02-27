import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

declare const core: any;

@Component({
  selector: 'app-detalharsolicitacao',
  imports: [RouterLink, Breadcrumb],
  templateUrl: './detalharsolicitacao.html',
  styleUrl: './detalharsolicitacao.css'
})
export class Detalharsolicitacao {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Detalhar Solicitação', address: '' }
  ];

  mostrarElemento = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const abasList = []
    for (const brTab of window.document.querySelectorAll('.br-tab')) {
      abasList.push(new core.BRTab('br-tab', brTab))
    }

    const accordionList = []
    for (const brAccordion of window.document.querySelectorAll('.br-accordion')) {
      accordionList.push(Object.create(new core.BRAccordion('br-accordion', brAccordion)))
    }

    const modo = this.route.snapshot.queryParamMap.get('modo');
    this.mostrarElemento = modo === 'novoprefeito';
  }

  imprimir(): void {
    window.print();
  }  
}
