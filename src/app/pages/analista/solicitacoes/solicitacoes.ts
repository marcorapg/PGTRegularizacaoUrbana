import { Component } from '@angular/core';
import { Breadcrumb } from '../../../layout/breadcrumb/breadcrumb';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ContextMenuComponent, MenuItem } from '../../../layout/dropdownmenu/dropdownmenu';
import { CommonModule } from '@angular/common';
import { Registrarnumerosei } from './registrarnumerosei/registrarnumerosei';
import { Analisarsolicitacao } from './analisarsolicitacao/analisarsolicitacao';
import { Analisarperimetrourbano } from './analisarperimetrourbano/analisarperimetrourbano';
import { Registrarparecermcid } from './registrarparecermcid/registrarparecermcid';
import { Registrarparecermcidrelatoriocaracterizacao } from './registrarparecermcidrelatoriocaracterizacao/registrarparecermcidrelatoriocaracterizacao';
import { Realizaranalisecartograficaautorizacaoobra } from './realizaranalisecartograficaautorizacaoobra/realizaranalisecartograficaautorizacaoobra';
import { Realizaranalisegeorreferenciamentoautorizacaoobra } from './realizaranalisegeorreferenciamentoautorizacaoobra/realizaranalisegeorreferenciamentoautorizacaoobra';

declare const core: any;

@Component({
  selector: 'app-solicitacoes',
  imports: [RouterLink, Breadcrumb, ContextMenuComponent, CommonModule, Registrarnumerosei, Analisarsolicitacao, Analisarperimetrourbano, Registrarparecermcid, Registrarparecermcidrelatoriocaracterizacao, Realizaranalisecartograficaautorizacaoobra, Realizaranalisegeorreferenciamentoautorizacaoobra],
  templateUrl: './solicitacoes.html',
  styleUrl: './solicitacoes.css'
})
export class Solicitacoes {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  esconderMensagemSucesso = true;
  mensagemSucesso = "";

  scrimOpen = false;
  esconderVisualizarSolicitacao = true;
  esconderCancelamento = true;
  esconderRegistrarNumeroSei = true;
  esconderAnalisarSolicitacao = true;
  esconderAnalisarPerimetroUrbano = true;
  esconderRegistrarParecerMCID = true;
  esconderRegistrarParecerMCIDRelatorioCaracterizacao = true;
  esconderRealizarAnaliseCartograficaAutorizacaoObra = true;
  esconderRealizarAnaliseGeorreferenciamentoAutorizacaoObra = true;

  onMenuSelect(item: any) {

    this.esconderVisualizarSolicitacao = true;
    this.esconderCancelamento = true;
    this.esconderRegistrarNumeroSei = true;
    this.esconderAnalisarSolicitacao = true;
    this.esconderAnalisarPerimetroUrbano = true;
    this.esconderRegistrarParecerMCID = true;
    this.esconderRegistrarParecerMCIDRelatorioCaracterizacao = true;
    this.esconderRealizarAnaliseCartograficaAutorizacaoObra = true;
    this.esconderRealizarAnaliseGeorreferenciamentoAutorizacaoObra = true;

    switch (item.srcElement.text) {
      case " Visualizar Solicitação ":
        this.esconderVisualizarSolicitacao = false;
        break;
      case " Cancelar Solicitação ":
        this.esconderCancelamento = false;
        break;
      case " Registrar Número SEI ":
        this.esconderRegistrarNumeroSei = false;
        break;
      case " Analisar Documentação ":
        this.esconderAnalisarSolicitacao = false;
        break;
      case " Analisar Perímetro Urbano ":
        this.esconderAnalisarPerimetroUrbano = false;
        break;
      case " Registrar Parecer MCID ":
        this.esconderRegistrarParecerMCID = false;
        break;
      case " Registrar Parecer MCID do Relatório de Caracterização Urbana ":
        this.esconderRegistrarParecerMCIDRelatorioCaracterizacao = false;
        break;
      case " Realizar Análise Cartográfica da Autorização de Obra ":
        this.esconderRealizarAnaliseCartograficaAutorizacaoObra = false;
        break;
      case " Realizar Análise de Georreferenciamento da Autorização de Obra ":
        this.esconderRealizarAnaliseGeorreferenciamentoAutorizacaoObra = false;
        break;
        
    }
  }

  solicitacoes = [
    {
      numeroSolicitacao: '3819274501',
      nomeGleba: 'Santa Luzia',
      localizacao: 'Vila Nova Esperança',
      codigoParcela: '7f2c1a9e-b8d4-4f39-9b83-92f1c3e8a4d7',
      dataRequerimento: '12/03/2024',
      codigoProcessoSEI: '-',
      statusSolicitacao: 'Aberta',
      statusAutorizacaoObra: 'Solicitada',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Registrar Número SEI', value: 'cancelar', modal: true, routerLink: '/analista/solicitacoes/registrarnumerosei' }
      ]
    },
    {
      numeroSolicitacao: '9401185237',
      nomeGleba: 'Boa Vista',
      localizacao: 'Bairro Alto do Cruzeiro',
      codigoParcela: 'c41ad8c3-1ac6-4ff2-a287-d60d945fce89',
      dataRequerimento: '25/03/2024',
      codigoProcessoSEI: '23112.045534/2023-74',
      statusSolicitacao: 'Aguardando Análise Documental',
      statusAutorizacaoObra: 'Não Solicitada',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Analisar Documentação', value: 'cancelar', modal: true, routerLink: '/analista/solicitacoes/analisarsolicitacao' }
      ]
    },
    {
      numeroSolicitacao: '5527391048',
      nomeGleba: 'Primavera',
      localizacao: 'Distrito de São Miguel',
      codigoParcela: 'e0fa92c1-6b22-4ce4-b0c7-5ea9238b29cd',
      dataRequerimento: '08/04/2024',
      codigoProcessoSEI: '23112.045601/2023-19',
      statusSolicitacao: 'Aguardando Correção Documental pela Prefeitura',
      statusAutorizacaoObra: 'Solicitada',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' }
      ]
    },
    {
      numeroSolicitacao: '1830479265',
      nomeGleba: 'Esperança',
      localizacao: 'Povoado Serra Verde',
      codigoParcela: 'f92b1db7-2ee7-45fd-8b5a-8fb2f0d456ce',
      dataRequerimento: '19/04/2024',
      codigoProcessoSEI: '23112.045672/2023-83',
      statusSolicitacao: 'Aguardando Análise de Perímetro Urbano',
      statusAutorizacaoObra: 'Solicitada',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Relatório de Conformidades', value: 'cancelar', modal: false, routerLink: '/analista/relatorioconformidades' },
        { label: 'Resolver Pendência', value: 'cancelar', modal: false, routerLink: '/analista/resolverpendencias' },
        { label: 'Analisar Perímetro Urbano', value: 'cancelar', modal: true, routerLink: '/analista/solicitacoes/analisarperimetrourbano' }
      ]
    },
    {
      numeroSolicitacao: '4923760851',
      nomeGleba: 'São Fernando',
      localizacao: 'Bairro Jardim das Cruzes',
      codigoParcela: '4a2b1cef-dd53-d46d-f09c-2b90b77e64aa',
      dataRequerimento: '12/05/2024',
      codigoProcessoSEI: '23112.045711/2023-05',
      statusSolicitacao: 'Aguardando Correção de Georreferenciamento pela Prefeitura',
      statusAutorizacaoObra: 'Não Solicitada',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Solicitação de Parecer MCID',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Solicitar Parecer MCID', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/solicitarparecermcid' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Registro do Parecer MCID',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Registrar Parecer MCID', value: 'cancelar', modal: true, routerLink: '/analista/solicitacoes/registrarparecermcid' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Análise Parecer MCID',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Registrar Análise do Parecer MCID', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/analisarparecermcid' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Documentação Complementar da Prefeitura',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Elaboração do Relatório de Caracterização Urbana',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Elaborar Relatório de Caracterização Urbana', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/elaborarrelatoriocaracterizacaourbana' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Solicitação de Parecer MCID do Relatório de Caracterização Urbana',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Solicitar Parecer MCID do Relatório de Caracterização Urbana', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/solicitacarparecermcidrelatoriocaracterizacao' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Registro do Parecer MCID do Relatório de Caracterização Urbana',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Registrar Parecer MCID do Relatório de Caracterização Urbana', value: 'cancelar', modal: true, routerLink: '/analista/solicitacoes/registrarparecermcidrelatoriocaracterizacao' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Análise Parecer MCID do Relatório de Caracterização Urbana',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Análise do parecer do MCID referente ao Relatório de Caracterização Urbana', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/analisarparecermcidrelatoriocaracterizacao' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Exigência de Documentação Complementar para o Relatório de Caracterização Urbana',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Aprovação Regularização Fundiária',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Aprovar Regularização Fundiária', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/aprovarregularizacaofundiaria' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Aprovação Superior Regularização Fundiária',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Aprovar Regularização Fundiária', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/aprovarregularizacaofundiaria' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Elaboração Minuta Título',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Elaborar Minuta do Título de Doação com Encargos', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/elaborarminutatitulodoacaoencargos' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Exigência de Ciência da Titulação',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Elaboração de Ofício de Solicitação Parecer PFE',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Elaborar Ofício de Solicitação de Parecer PFE', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/elaboraroficiosolicitacaoparecerpfe' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Registro da Aprovação PFE',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Registrar Aprovação PFE', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/registraraprovacaopfe' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Elaboração dos Documentos do Título de Doação',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Elaborar Documentos do Título de Doação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/elaborardocumentotitulodoacao' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Despacho Decisório do Título de Doação',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Exibir Documentos de Título de Doação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/exibirdocumentostitulodoacao' },
        { label: 'Assinar Despacho Decisório', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/assinardespachodecisorio' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Assinatura do Título de Doação',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Assinar Título de Doação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/assinartitulodoacao' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Emissão do Título de Doação',
      statusAutorizacaoObra: 'Indeferida',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Emitir Título', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/emitirtitulo' }
      ]
    },

    //Autorização de obra
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Emissão do Título de Doação',
      statusAutorizacaoObra: 'Aguardando Análise Cartográfica da Autorizacao de Obra',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Realizar Análise Cartográfica da Autorização de Obra', value: 'cancelar', modal: true, routerLink: '/analista/solicitacoes/realizaranalisecartograficaautorizacaoobra' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Emissão do Título de Doação',
      statusAutorizacaoObra: 'Aguardando Análise de Georreferenciamento da Autorização de Obra',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Realizar Análise de Georreferenciamento da Autorização de Obra', value: 'cancelar', modal: true, routerLink: '/analista/solicitacoes/realizaranalisegeorreferenciamentoautorizacaoobra' }
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Emissão do Título de Doação',
      statusAutorizacaoObra: 'Aguardando Elaboração da Autorização de Obra',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Emitir Autorização de Obra', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/emitirautorizacaoobra' }        
      ]
    },
    {
      numeroSolicitacao: '8045197632',
      nomeGleba: 'Santo Antônio',
      localizacao: 'Distrito Novo Progresso',
      codigoParcela: 'd7c61f40-6150-42ad-b5a3-f4f98e2fa917',
      dataRequerimento: '14/05/2024',
      codigoProcessoSEI: '23112.045748/2023-62',
      statusSolicitacao: 'Aguardando Emissão do Título de Doação',
      statusAutorizacaoObra: 'Aguardando Assinatura da Autorização de Obra',
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Assinar Autorização de Obra', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/assinarautorizacaoobra' }
      ]
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
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Visualizar Título Emitido', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/visualizartituloemitido' }
      ]
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
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Consultar Motivo do Indeferimento da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/visualizarmotivoindeferimento' }
      ]
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
      menuItems: [
        { label: 'Detalhar Solicitação', value: 'visualizar', modal: false, routerLink: '/analista/solicitacoes/detalharsolicitacao' },
        { label: 'Histórico da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/historicosolicitacao' },
        { label: 'Consultar Motivo do Cancelamento da Solicitação', value: 'cancelar', modal: false, routerLink: '/analista/solicitacoes/visualizarmotivocancelamento' }
      ]
    }
  ];

  private cores: string[] = [

    // 🔵 Blue Warm
    'bg-blue-warm-vivid-50', 'bg-blue-warm-vivid-60', 'bg-blue-warm-vivid-70',
    'bg-blue-warm-vivid-80', 'bg-blue-warm-vivid-90',

    // 🔷 Blue Cool
    'bg-blue-cool-vivid-50', 'bg-blue-cool-vivid-60', 'bg-blue-cool-vivid-70',
    'bg-blue-cool-vivid-80', 'bg-blue-cool-vivid-90',

    // 🟢 Green Cool
    'bg-green-cool-vivid-50', 'bg-green-cool-vivid-60', 'bg-green-cool-vivid-70',
    'bg-green-cool-vivid-80', 'bg-green-cool-vivid-90',

    // 🟢 Green Warm
    'bg-green-warm-vivid-50', 'bg-green-warm-vivid-60', 'bg-green-warm-vivid-70',
    'bg-green-warm-vivid-80', 'bg-green-warm-vivid-90',

    // 🟠 Orange
    'bg-orange-vivid-50', 'bg-orange-vivid-60', 'bg-orange-vivid-70',
    'bg-orange-vivid-80', 'bg-orange-vivid-90',

    // 🟠 Orange Warm
    'bg-orange-warm-vivid-50', 'bg-orange-warm-vivid-60', 'bg-orange-warm-vivid-70',
    'bg-orange-warm-vivid-80', 'bg-orange-warm-vivid-90',

    // 🔴 Red Cool
    'bg-red-cool-vivid-50', 'bg-red-cool-vivid-60', 'bg-red-cool-vivid-70',
    'bg-red-cool-vivid-80', 'bg-red-cool-vivid-90',

    // 🔴 Red Warm
    'bg-red-warm-vivid-50', 'bg-red-warm-vivid-60', 'bg-red-warm-vivid-70',
    'bg-red-warm-vivid-80', 'bg-red-warm-vivid-90',

    // 🟣 Purple
    'bg-purple-vivid-50', 'bg-purple-vivid-60', 'bg-purple-vivid-70',
    'bg-purple-vivid-80', 'bg-purple-vivid-90',

    // ⚫ Gray (mais escuros)
    'bg-gray-60', 'bg-gray-70', 'bg-gray-80', 'bg-gray-90'
  ];

  getStatusSolicitacaoClass(status: string): string {

    let hash = 0;

    for (let i = 0; i < status.length; i++) {
      hash = status.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash;
    }

    const indice = Math.abs(hash) % this.cores.length;

    return this.cores[indice];
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

      case 'Aguardando Análise Cartográfica da Autorizacao de Obra':
        return 'bg-yellow-70';

      case 'Aguardando Análise de Georreferenciamento da Autorização de Obra':
        return 'bg-purple-40';

      case 'Aguardando Elaboração da Autorização de Obra':
        return 'bg-orange-vivid-90';
        
      case 'Aguardando Assinatura da Autorização de Obra':
        return 'bg-blue-warm-vivid-50';        

      default:
        return 'bg-black-40';
    }
  }

  private scrimfoco: any;
  closeScrim() {
    const scrim = document.querySelector('#scrimexample');

    if (scrim) {
      scrim.classList.remove('active');
    }
  }

  irParaSolicitacoes() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(
        ['/analista/solicitacoes'],
        {
          queryParams: {
            tipoMensagemSucesso: 'sucesso'
          }
        }
      );
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {

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
        case "sucesso":
          this.mensagemSucesso = "Ação realizada com sucesso!";
          break;
      }
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
  }
}
