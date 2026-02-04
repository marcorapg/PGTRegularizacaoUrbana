import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../layout/breadcrumb/breadcrumb';
import { CommonModule, NgIf } from '@angular/common';
import { Estornarresolucao } from "./estornarresolucao/estornarresolucao";
import { ContextMenuComponent, MenuItem } from '../../../layout/dropdownmenu/dropdownmenu';
import { Justificativaresolucao } from "./justificativaresolucao/justificativaresolucao";
import { Editarjustificativa } from "./editarjustificativa/editarjustificativa";

declare const core: any;

@Component({
  selector: 'app-resolverpendencias',
  imports: [RouterLink, Breadcrumb, CommonModule, Estornarresolucao, ContextMenuComponent, Justificativaresolucao, Editarjustificativa, NgIf],
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

  expandido1: boolean = false;
  expandido2: boolean = false;
  expandido3: boolean = false;
  expandido4: boolean = false;
  expandido5: boolean = false;
  expandido6: boolean = false;  

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

  menuItemsAreaDestinada: MenuItem[] = [
    { label: 'Análise de Solicitação', value: 'Análise de Solicitação', modal: true },
    { label: 'Estornar Pendência', value: 'Estornar Pendência', modal: true }
  ];

  menuItemsDetalhesArea: MenuItem[] = [
    { label: 'Elaborar Ofício Casa Civil', value: 'Elaborar Ofício Casa Civil', modal: true },
    { label: 'Estornar Pendência', value: 'Estornar Pendência', modal: true }
  ];

  menuItemsManifestacaoInteresse: MenuItem[] = [
    { label: 'Elaborar Ofício', value: 'Elaborar Ofício', modal: true },
    { label: 'Estornar Pendência', value: 'Estornar Pendência', modal: true }
  ];

  menuItems: MenuItem[] = [
    { label: 'Dar parecer favorável', value: 'Dar parecer favorável', modal: true },
    { label: 'Editar justificativa', value: 'Editar justificativa', modal: true },
    { label: 'Estornar resolução', value: 'Estornar resolução', modal: true }
  ];

  scrimOpen = false;
  esconderAnaliseSolicitacao = true;
  esconderElaborarOficioCasaCivil = true;
  esconderElaborarOficio = true;
  esconderEstornoPendencia = true;

  esconderJustificativaResolucao: boolean = true;
  esconderEditarJustificativaResolucao: boolean = true;
  esconderEstornarResolucao: boolean = true;

  onMenuSelect(item: any) {

    this.esconderAnaliseSolicitacao = true;
    this.esconderElaborarOficioCasaCivil = true;
    this.esconderElaborarOficio = true;
    this.esconderEstornoPendencia = true;

    this.esconderJustificativaResolucao = true;
    this.esconderEditarJustificativaResolucao = true;
    this.esconderEstornarResolucao = true;

    switch (item.srcElement.text) {
      case " Análise de Solicitação ":
        this.esconderAnaliseSolicitacao = false;
        break;
      case " Elaborar Ofício Casa Civil ":
        this.esconderElaborarOficioCasaCivil = false;
        break;
      case " Elaborar Ofício ":
        this.esconderElaborarOficio = false;
        break;
      case " Estornar Pendência ":
        this.esconderEstornoPendencia = false;
        break;

      case " Dar parecer favorável ":
        this.esconderJustificativaResolucao = false;
        break;
      case " Editar justificativa ":
        this.esconderEditarJustificativaResolucao = false;
        break;
      case " Estornar resolução ":
        this.esconderEstornarResolucao = false;
        break;
    }
  }

  openScrim() {
    this.scrimOpen = true;
    // se precisa de foco ou scroll, faça aqui
  }

  closeScrim() {
    this.scrimOpen = false;
  }

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

    const uploadList = []

    function uploadTimeout() {
      return new Promise((resolve) => {
        // Colocar aqui um upload para o servidor e retirar o timeout
        return setTimeout(resolve, 3000)
      })
    }

    for (const brUpload of window.document.querySelectorAll('.br-upload')) {
      uploadList.push(new core.BRUpload('br-upload', brUpload, uploadTimeout))
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
