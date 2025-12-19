import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';

declare const core: any;

@Component({
  selector: 'app-detalharpendenciageorreferenciamento',
  imports: [RouterLink, Breadcrumb, CommonModule, FormsModule, Cabecalhosolicitacao],
  templateUrl: './detalharpendenciageorreferenciamento.html',
  styleUrl: './detalharpendenciageorreferenciamento.css'
})
export class Detalharpendenciageorreferenciamento {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
    { text: 'Detalhamento de Pendência de Gerorreferenciamento', address: '' }
  ];

  opcaoAutorizacaoObra: string = '';

  opcaoSelecionada: string | null = null;

  algumaMarcada() {
    if (this.opcaoSelecionada) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    const accordionList = []
    for (const brAccordion of window.document.querySelectorAll('.br-accordion')) {
      accordionList.push(Object.create(new core.BRAccordion('br-accordion', brAccordion)))
    }

    const alertList = []
    for (const brAlert of window.document.querySelectorAll('.br-message')) {
      alertList.push(new core.BRAlert('br-message', brAlert))
    }

    const uploadList = [];
    function uploadTimeout() {
      return new Promise((resolve) => {
        // Colocar aqui um upload para o servidor e retirar o timeout
        return setTimeout(resolve, 3000)
      })
    }

    for (const brUpload of window.document.querySelectorAll('.br-upload')) {
      uploadList.push(new core.BRUpload('br-upload', brUpload, uploadTimeout))
    }

    window.document.querySelectorAll('[data-toggle="collapse"]').forEach((trigger) => {
      const config = {
        iconToHide: 'fa-chevron-up',
        iconToShow: 'fa-chevron-down',
        trigger,
        useIcons: true,
      }
      const collapse = new core.Collapse(config)
      collapse.setBehavior()
    });
  }
}
