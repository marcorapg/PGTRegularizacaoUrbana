import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { RouterLink } from '@angular/router';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tomarcienciatitulacao',
  imports: [Cabecalhosolicitacao, Breadcrumb, RouterLink],
  templateUrl: './tomarcienciatitulacao.html',
  styleUrl: './tomarcienciatitulacao.css'
})
export class Tomarcienciatitulacao  implements AfterViewInit {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
    { text: 'Tomar Ciência da Titulação', address: '' }
  ];

  ngAfterViewInit(): void {
    const core = (window as any).core;

    const alertList = []
    for (const brAlert of window.document.querySelectorAll('.br-message')) {
      alertList.push(new core.BRAlert('br-message', brAlert))
    }

    const tooltipList = []
    for (const brTooltip of window.document.querySelectorAll('.br-tooltip:not(.utilities)')) {
      tooltipList.push(new core.BRTooltip('br-tooltip', brTooltip))
    }
  }  
}
