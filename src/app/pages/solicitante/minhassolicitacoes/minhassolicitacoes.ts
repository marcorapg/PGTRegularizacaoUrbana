import type { MenuItem } from '../../../layout/dropdownmenu/dropdownmenu';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../layout/breadcrumb/breadcrumb';
import { ContextMenuComponent } from "../../../layout/dropdownmenu/dropdownmenu";
import { CommonModule } from '@angular/common';
import { Cancelamento } from './cancelamento/cancelamento';
import { Visualizarsolicitacao } from "./visualizarsolicitacao/visualizarsolicitacao";

declare const core: any;

@Component({
  selector: 'app-minhassolicitacoes',
  imports: [RouterLink, Breadcrumb, ContextMenuComponent, CommonModule, Cancelamento, Visualizarsolicitacao],
  templateUrl: './minhassolicitacoes.html',
  styleUrl: './minhassolicitacoes.css'
})
export class Minhassolicitacoes {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas Solicitações de Título de Regularização Fundiária Urbana', address: '/solicitante/criarsolicitacao/' }
  ];

  constructor(private route: ActivatedRoute) { }

  esconderMensagemSucesso = true;
  mensagemSucesso = "";

  menuItems: MenuItem[] = [
    { label: 'Visualizar Solicitação', value: 'edit', modal: true }
  ];

  menuItemsAnaliseDocumental: MenuItem[] = [
    { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarsolicitacao' },
    { label: 'Cancelar Solicitação', value: 'cancelar', modal: false, routerLink: '/solicitante/minhassolicitacoes/cancelamento' }
  ];

  menuItemsPendenciaDocumental: MenuItem[] = [
    { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarsolicitacao' },
    { label: 'Detalhar Pendência Documental', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/detalharpendenciadocumental' },
    { label: 'Corrigir Pendência Documental', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/corrigirpendenciadocumental' },
    { label: 'Corrigir Pendência de Georreferenciamento', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/corrigirpendenciadocumentalgeo' },
    { label: 'Cancelar Solicitação', value: 'cancelar', modal: false, routerLink: '/solicitante/minhassolicitacoes/cancelamento' }
  ];

  menuItemsAnalisePerimetroUrbano: MenuItem[] = [
    { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarsolicitacao' },
  ];

  menuItemsPendenciaGeorreferenciamento: MenuItem[] = [
    { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarsolicitacao' },
    { label: 'Detalhar Pendência no Georreferenciamento', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/detalharpendenciageorreferenciamento' },
    { label: 'Corrigir Pendência de Georreferenciamento', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/corrigirpendenciadocumentalgeo' },
    { label: 'Cancelar Solicitação', value: 'cancelar', modal: false, routerLink: '/solicitante/minhassolicitacoes/cancelamento' }
  ];

  menuItemsMinutaTituloEmitida: MenuItem[] = [
    { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarsolicitacao' },
    { label: 'Tomar Ciêncida da Titulação', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/tomarcienciatitulacao' },
    { label: 'Visualizar Minuta do Título', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarminutatitulo' }
  ];

  menuItemsTituloAguardandoAprovacaoSuperior: MenuItem[] = [
    { label: 'Detalhar Solicitação', value: 'novoprefeito', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarsolicitacao' },
    { label: 'Visualizar Minuta do Título', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarminutatitulo' },
    { label: 'Consultar Notificação de Indeferimento de Autorização de Obra', value: 'cancelar', modal: false, routerLink: '/solicitante/minhassolicitacoes/consultarindeferimentoautorizacaoobra' }
  ];

  menuItemsTituloEmitido: MenuItem[] = [
    { label: 'Detalhar Solicitação', value: 'novoprefeito', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarsolicitacao' },
    { label: 'Consultar Instruções de Retirada do Título', value: 'cancelar', modal: false, routerLink: '/solicitante/minhassolicitacoes/consultarinstrucoesretirada' },
    { label: 'Visualizar Minuta do Título', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarminutatitulo' },
    { label: 'Visualizar Autorização de Obra', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarautorizacaoobra' }
  ];

  menuItemsIndeferida: MenuItem[] = [
    { label: 'Detalhar Solicitação', value: 'novoprefeito', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarsolicitacao' },
    { label: 'Consultar Motivo do Indeferimento da Solicitação', value: 'cancelar', modal: false, routerLink: '/solicitante/minhassolicitacoes/consultarindeferimento' }
  ];

  menuItemsCanceladaUsuario: MenuItem[] = [
    { label: 'Detalhar Solicitação', value: 'novoprefeito', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarsolicitacao' },
    { label: 'Consultar Motivo do Cancelamento da Solicitação', value: 'cancelar', modal: false, routerLink: '/solicitante/minhassolicitacoes/consultarcancelamento' },
    { label: 'Consultar Notificação de Indeferimento de Autorização de Obra', value: 'cancelar', modal: false, routerLink: '/solicitante/minhassolicitacoes/consultarindeferimentoautorizacaoobra' }
  ];

  scrimOpen = false;
  esconderVisualizarSolicitacao = true;
  esconderCancelamento = true;

  onMenuSelect(item: any) {

    this.esconderVisualizarSolicitacao = true;
    this.esconderCancelamento = true;

    switch (item.srcElement.text) {
      case " Visualizar Solicitação ":
        this.esconderVisualizarSolicitacao = false;
        break;
      case " Cancelar Solicitação ":
        this.esconderCancelamento = false;
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

    const accordionList = []
    for (const brAccordion of window.document.querySelectorAll('.br-accordion')) {
      accordionList.push(Object.create(new core.BRAccordion('br-accordion', brAccordion)))
    }

    const selectList = []
    const notFoundElement = `
    <div class="br-item not-found">
      <div class="container">
      <div class="row">
        <div class="col">
        <p><strong>Ops!</strong> Não encontramos o que você está procurando!</p>
        </div>
      </div>
      </div>
    </div>
    `
    for (const brSelect of window.document.querySelectorAll('.br-select')) {
      const brselect = new core.BRSelect('br-select', brSelect, notFoundElement)
      //Exemplo de uso de listener do select
      brSelect.addEventListener('onChange', function (e) { })
      selectList.push(brselect)
    }

    const tipoMensagem = this.route.snapshot.queryParamMap.get('tipoMensagemSucesso');

    if (tipoMensagem) {
      this.esconderMensagemSucesso = false;
      switch (tipoMensagem) {
        case "pendenciaDocumental":
          this.mensagemSucesso = "Correção de pendência documental salva com sucesso!";
          break;
        case "pendenciaDocumentalGeo":
          this.mensagemSucesso = "Correção de pendência de georreferenciamento salva com sucesso!";
          break;
        case "cancelarSolicitacao":
          this.mensagemSucesso = "Cancelamento de solicitação salvo com sucesso!";
          break;
        case "tomarCienciaTitulacao":
          this.mensagemSucesso = "Tomada de ciência de titulação salva com sucesso!";
          break;
      }
    }
  }
}