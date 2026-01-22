import { Component } from '@angular/core';
import { Breadcrumb } from '../../../layout/breadcrumb/breadcrumb';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContextMenuComponent, MenuItem } from '../../../layout/dropdownmenu/dropdownmenu';
import { CommonModule } from '@angular/common';

declare const core: any;

@Component({
  selector: 'app-solicitacoes',
  imports: [RouterLink, Breadcrumb, ContextMenuComponent, CommonModule],
  templateUrl: './solicitacoes.html',
  styleUrl: './solicitacoes.css'
})
export class Solicitacoes {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Solicitações de Título de Regularização Urbana', address: '' }
  ];

  constructor(private route: ActivatedRoute) { }

  esconderMensagemSucesso = true;
  mensagemSucesso = "";

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

  menuItemsAnaliseDocumental: MenuItem[] = [
    { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/solicitante/minhassolicitacoes/visualizarsolicitacao' },
    { label: 'Cancelar Solicitação', value: 'cancelar', modal: false, routerLink: '/solicitante/minhassolicitacoes/cancelamento' },
    { label: 'Relatório de Conformidades', value: 'cancelar', modal: false, routerLink: '/analista/relatorioconformidades' }
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

  solicitacoes = [
    {
      numeroSolicitacao: '3819274501',
      nomeGleba: 'Santa Luzia',
      localizacao: 'Vila Nova Esperança',
      codigoParcela: '7f2c1a9e-b8d4-4f39-9b83-92f1c3e8a4d7',
      dataRequerimento: '12/03/2024',
      codigoProcessoSEI: '23112.045515/2023-71',
      statusSolicitacao: 'Análise Documental',
      statusAutorizacaoObra: 'Solicitada',
      menuItems: this.menuItemsAnaliseDocumental
    },
    {
      numeroSolicitacao: '9401185237',
      nomeGleba: 'Boa Vista',
      localizacao: 'Bairro Alto do Cruzeiro',
      codigoParcela: 'c41ad8c3-1ac6-4ff2-a287-d60d945fce89',
      dataRequerimento: '25/03/2024',
      codigoProcessoSEI: '23112.045534/2023-74',
      statusSolicitacao: 'Pendência Documental',
      statusAutorizacaoObra: 'Não Solicitada',
      menuItems: this.menuItemsPendenciaDocumental
    },
    {
      numeroSolicitacao: '5527391048',
      nomeGleba: 'Primavera',
      localizacao: 'Distrito de São Miguel',
      codigoParcela: 'e0fa92c1-6b22-4ce4-b0c7-5ea9238b29cd',
      dataRequerimento: '08/04/2024',
      codigoProcessoSEI: '23112.045601/2023-19',
      statusSolicitacao: 'Análise de Perímetro Urbano',
      statusAutorizacaoObra: 'Solicitada',
      menuItems: this.menuItemsAnalisePerimetroUrbano
    },
    {
      numeroSolicitacao: '1830479265',
      nomeGleba: 'Esperança',
      localizacao: 'Povoado Serra Verde',
      codigoParcela: 'f92b1db7-2ee7-45fd-8b5a-8fb2f0d456ce',
      dataRequerimento: '19/04/2024',
      codigoProcessoSEI: '23112.045672/2023-83',
      statusSolicitacao: 'Pendência no Georreferenciamento',
      statusAutorizacaoObra: 'Solicitada',
      menuItems: this.menuItemsPendenciaGeorreferenciamento
    },
    {
      numeroSolicitacao: '4923760851',
      nomeGleba: 'São Fernando',
      localizacao: 'Bairro Jardim das Cruzes',
      codigoParcela: '4a2b1cef-dd53-d46d-f09c-2b90b77e64aa',
      dataRequerimento: '12/05/2024',
      codigoProcessoSEI: '23112.045711/2023-05',
      statusSolicitacao: 'Minuta do Título Emitida',
      statusAutorizacaoObra: 'Não Solicitada',
      menuItems: this.menuItemsMinutaTituloEmitida
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Emissão de Título em Análise',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: this.menuItemsTituloAguardandoAprovacaoSuperior
    },
    {
      numeroSolicitacao: '8214590376',
      nomeGleba: 'Santa Ana',
      localizacao: 'Bairro Lapinha',
      codigoParcela: '8b71fc54-8e11-c44d-4c2a-e72d6939c9b3',
      dataRequerimento: '01/02/2024',
      codigoProcessoSEI: '23112.045389/2023-44',
      statusSolicitacao: 'Título Emitido',
      statusAutorizacaoObra: 'Emitida',
      menuItems: this.menuItemsTituloEmitido
    },
    {
      numeroSolicitacao: '5908214376',
      nomeGleba: 'Santa Fé',
      localizacao: 'Bairro Central',
      codigoParcela: 'c8b71f54-18e1-44cd-a4c2-3e72d69c9b93',
      dataRequerimento: '03/06/2024',
      codigoProcessoSEI: '23112.045812/2023-91',
      statusSolicitacao: 'Indeferida',
      statusAutorizacaoObra: 'Não Solicitada',
      menuItems: this.menuItemsIndeferida
    },
    {
      numeroSolicitacao: '3357902841',
      nomeGleba: 'Nova União',
      localizacao: 'Vila do Carmo',
      codigoParcela: 'e71c0d7a-92d9-41b2-8890-4c329961b774',
      dataRequerimento: '11/06/2024',
      codigoProcessoSEI: '23112.045845/2023-38',
      statusSolicitacao: 'Cancelada pelo Usuário',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: this.menuItemsCanceladaUsuario
    }
  ];

  getStatusSolicitacaoClass(status: string): string {
    switch (status) {
      case 'Análise Documental':
        return 'bg-blue-warm-vivid-40';
      case 'Análise de Perímetro Urbano':
        return 'bg-blue-warm-vivid-70';
      case 'Pendência Documental':
        return 'bg-orange-warm-vivid-60';
      case 'Pendência no Georreferenciamento':
        return 'bg-orange-vivid-60';
      case 'Minuta do Título Emitida':
        return 'bg-blue-cool-vivid-20';
      case 'Emissão de Título em Análise':
        return 'bg-green-cool-vivid-30';
      case 'Título Emitido':
        return 'bg-green-warm-vivid-50';
      case 'Indeferida':
        return 'bg-red-warm-vivid-70';
      case 'Cancelada pelo Usuário':
        return 'bg-gray-40';
      default:
        return 'bg-black-40';
    }
  }

  getStatusObraClass(status: string): string {
    switch (status) {
      case 'Solicitada':
        return 'bg-blue-cool-vivid-70';

      case 'Emitida':
        return 'bg-green-cool-vivid-50';

      case 'Indeferida':
        return 'bg-red-warm-vivid-70';

      case 'Não Solicitada':
        return 'bg-gray-40';

      default:
        return 'bg-black-40';
    }
  }

  // openScrim() {
  //   this.scrimOpen = true;
  //   // se precisa de foco ou scroll, faça aqui
  // }

  // closeScrim() {
  //   this.scrimOpen = false;
  // }

  // private scrimfoco: any;
  // private buttonActivateModalScrim: HTMLButtonElement | null = null;
  // private buttonCloseModalScrim: HTMLButtonElement | null = null;

  ngOnInit(): void {
    // Acessa a classe BRScrim do objeto 'core'
    // const scrscrim = window.document.querySelector('#scrimexample');

    // if (scrscrim && typeof core !== 'undefined' && core.BRScrim) {
    //   this.scrimfoco = new core.BRScrim('br-scrim', scrscrim, true);

    //   this.buttonActivateModalScrim = window.document.querySelector('.modal-btn') as HTMLButtonElement;

    //   document.querySelectorAll('.modal-btn').forEach((el: Element, index: number) => {
    //     el.addEventListener('click', (e: any) => {
    //       this.scrimfoco.showScrim();
    //     });
    //   });
    // }

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
