import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const core: any;

@Component({
  selector: 'app-visualizarsolicitacao',
  imports: [RouterLink, Breadcrumb],
  templateUrl: './visualizarsolicitacao.html',
  styleUrl: './visualizarsolicitacao.css'
})
export class Visualizarsolicitacao {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
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
}