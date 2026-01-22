import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../layout/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { Justificativaresolucao } from './justificativaresolucao/justificativaresolucao';
import { Editarjustificativa } from "./editarjustificativa/editarjustificativa";
import { Estornarresolucao } from "./estornarresolucao/estornarresolucao";

declare const core: any;

@Component({
  selector: 'app-resolverpendencias',
  imports: [RouterLink, Breadcrumb, CommonModule, Justificativaresolucao, Editarjustificativa, Estornarresolucao],
  templateUrl: './resolverpendencias.html',
  styleUrl: './resolverpendencias.css'
})
export class Resolverpendencias {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Relatório de Conformidades', address: '/analista/relatorioconformidades/' },
    { text: 'Resolução de Pendências', address: '' }
  ];

  items = [
    {
      id: 1,
      status: 2,
      descricao: 'Imóvel se localiza em Gleba Pública Federal?',
      resposta: 'Não',
      datahora: '21/06/2023 22:12',
      justificativa: '',
      maisInformacoes: 'Pendência',
      detalhamentoMaisInformacoes: 'Detalhamento da pendência',
      expandido: false
    }
  ];

  // items = [
  //   {
  //     id: 1,
  //     status: 2,
  //     descricao: 'Imóvel se localiza em Gleba Pública Federal?',
  //     resposta: 'Não',
  //     datahora: '21/06/2023 22:12',
  //     justificativa: '',
  //     maisInformacoes: 'Pendência',
  //     detalhamentoMaisInformacoes: 'Detalhamento da pendência',
  //     expandido: false
  //   },
  //   {
  //     id: 2,
  //     status: 2,
  //     descricao: 'A área total ou parcial das parcelas selecionadas sobrepõe sobrepões unidade de constante na Base de Cadastro Nacional de Conservação?',
  //     resposta: 'Não',
  //     datahora: '18/03/2024 12:15',
  //     justificativa: '',
  //     maisInformacoes: 'Pendência',
  //     detalhamentoMaisInformacoes: 'Detalhamento da pendência',
  //     expandido: false
  //   },
  //   {
  //     id: 3,
  //     status: 2,
  //     descricao: 'A área total ou parcial das parcelas selecionadas sobrepõe a projetos de assentamento (INCRA)?',
  //     resposta: 'Não',
  //     datahora: '29/05/2024 12:43',
  //     justificativa: '',
  //     maisInformacoes: 'Pendência',
  //     detalhamentoMaisInformacoes: 'Detalhamento da pendência',
  //     expandido: false
  //   },
  //   {
  //     id: 4,
  //     status: 2,
  //     descricao: 'A área total ou parcial das parcelas abrange terrenos de marinha ou terrenos marginais?',
  //     resposta: 'Não',
  //     datahora: '21/06/2023 22:12',
  //     justificativa: '',
  //     maisInformacoes: 'Pendência',
  //     detalhamentoMaisInformacoes: 'Detalhamento da pendência',
  //     expandido: false
  //   },
  //   {
  //     id: 5,
  //     status: 2,
  //     descricao: 'Somatório de todas as áreas federais já doadas ao municipio ultrapassa 2500 hectares?',
  //     resposta: 'Não',
  //     datahora: '18/03/2024 12:15',
  //     justificativa: '',
  //     maisInformacoes: 'Pendência',
  //     detalhamentoMaisInformacoes: 'Detalhamento da pendência',
  //     expandido: false
  //   },
  //   {
  //     id: 6,
  //     status: 2,
  //     descricao: 'A área total ou parcial das parcelas selecionadas sobrepõe a área de interesse da FUNAI?',
  //     resposta: 'Não',
  //     datahora: '21/06/2023 22:12',
  //     justificativa: '',
  //     maisInformacoes: 'Pendência',
  //     detalhamentoMaisInformacoes: 'Detalhamento da pendência',
  //     expandido: false
  //   },
  //   {
  //     id: 7,
  //     status: 2,
  //     descricao: 'A gleba foi consultada pela Câmara Técnica de Destinação de Imóveis Rurais?',
  //     resposta: 'Não',
  //     datahora: '18/03/2024 12:15',
  //     justificativa: '',
  //     maisInformacoes: 'Pendência',
  //     detalhamentoMaisInformacoes: 'Detalhamento da pendência',
  //     expandido: false
  //   }
  // ];

  esconderJustificativaResolucao: boolean = true;
  esconderEditarJustificativaResolucao: boolean = true;
  esconderEstornarResolucao: boolean = true;

  expandido1: boolean = false;
  maisInformacoes1: string = "Pendência";
  detalhamentoMaisInformacoes1: string = "Detalhamento da pendência";

  private scrimfoco: any;
  private buttonActivateModalScrim: HTMLButtonElement | null = null;
  private buttonCloseModalScrim: HTMLButtonElement | null = null;

  ngOnInit(): void {
    // Acessa a classe BRScrim do objeto 'core'
    const scrscrim = window.document.querySelector('#scrimexample');

    if (scrscrim && typeof core !== 'undefined' && core.BRScrim) {
      this.scrimfoco = new core.BRScrim('br-scrim', scrscrim, true);

      this.buttonActivateModalScrim = window.document.querySelector('.modal-btn') as HTMLButtonElement;

      document.querySelectorAll('.modal-btn').forEach((el: Element, index: number) => {
        el.addEventListener('click', (e: any) => {
          this.scrimfoco.showScrim();
        });
      });
    }

    const tableList = []
    for (const [index, brTable] of window.document.querySelectorAll('.br-table').entries()) {
      tableList.push(new core.BRTable('br-table', brTable, index))
    }

    const checkboxList = []
    for (const brCheckbox of window.document.querySelectorAll('.br-checkbox')) {
      checkboxList.push(new core.BRCheckbox('br-checkbox', brCheckbox))
    }
  };

  // ngAfterViewInit(): void {
  //   const checkboxList = []
  //   for (const brCheckbox of window.document.querySelectorAll('.br-checkbox')) {
  //     checkboxList.push(new core.BRCheckbox('br-checkbox', brCheckbox))
  //   }

  //   const itemList = []
  //   for (const brItem of window.document.querySelectorAll('.br-item')) {
  //     itemList.push(new core.BRItem('br-item', brItem))
  //   }

  //   const listList = []
  //   for (const brList of window.document.querySelectorAll(('.br-list'))) {
  //     listList.push(new core.BRList('br-list', brList))
  //   }

  //   const tableList = []
  //   for (const [index, brTable] of window.document.querySelectorAll('.br-table').entries()) {
  //     tableList.push(new core.BRTable('br-table', brTable, index))
  //   }
  // };
}
