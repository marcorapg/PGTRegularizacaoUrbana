import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Breadcrumb } from '../../../layout/breadcrumb/breadcrumb';
import { RouterLink } from '@angular/router';

declare const core: any;

@Component({
  selector: 'app-relatorioconformidades',
  imports: [RouterLink, Breadcrumb, CommonModule],
  templateUrl: './relatorioconformidades.html',
  styleUrl: './relatorioconformidades.css'
})
export class Relatorioconformidades {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Relatório de Conformidades', address: '' }
  ];

  accordionSobreposicao: boolean = false;
  
  accordionDetalhesArea: boolean = false;
  accordionManifestacaoInteresse: boolean = false;

  areaDestinada = [
    {
      status: 2,
      descricao: 'A área total ou parcial do imóvel se localiza em Gleba Pública Federal?',
      resposta: 'Sim',
      datahora: '21/06/2023 22:12',
      justificativa: '',
      maisInformacoes: ' ',
      detalhamentoMaisInformacoes: 'SOBREPOSIÇÃO PARCIAL EM GLEBA FEDERAL',
      expandido: false
    },
    {
      status: 2,
      descricao: 'A área total ou parcial sobrepõe projetos de assentamento (INCRA)?',
      resposta: 'Sim',
      datahora: '29/05/2024 12:43',
      justificativa: '',
      maisInformacoes: ' ',
      detalhamentoMaisInformacoes: 'SOBREPOSIÇÃO PARCIAL EM PROJETOS DE ASSENTAMENTO',
      expandido: false
    },    
    {
      status: 1,
      descricao: 'A área total ou parcial sobrepõe áreas reservadas de Administração Militar Federal e as outras finalidades de utilidade pública ou de interesse social a cargo da União?',
      resposta: 'Não',
      datahora: '15/09/2024 10:13',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    },
    {
      status: 1,
      descricao: 'A área total ou parcial abrange terrenos de marinha ou terrenos marginais?',
      resposta: 'Não',
      datahora: '15/09/2024 10:13',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    },    
    {
      status: 1,
      descricao: 'A área total ou parcial sobrepõe terras indígenas?',
      resposta: 'Não',
      datahora: '23/02/2022 12:15',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    },
    {
      status: 2,
      descricao: 'A área total ou parcial sobrepõe unidade de constante na Base de Cadastro Nacional de Conservação?',
      resposta: 'Sim',
      datahora: '18/03/2024 12:15',
      justificativa: '',
      maisInformacoes: ' ',
      detalhamentoMaisInformacoes: 'SOBREPOSIÇÃO PARCIAL',
      expandido: false
    },
    {
      status: 1,
      descricao: 'A área total ou parcial sobrepõe territórios quilombolas?',
      resposta: 'Não',
      datahora: '12/07/2024 16:11',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    },
    {
      status: 1,
      descricao: 'A área total ou parcial  possui benfeitorias ou acessões federais (interesse SPU)?',
      resposta: 'Não',
      datahora: '01/05/2023 15:31',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    },
    {
      status: 1,
      descricao: 'A área total ou parcial sobrepõe qualquer outro imóvel conhecido (base de imóveis georrefrenciados do INCRA) SNCI ACERVO TÍTULO INCRA E SERFAL?',
      resposta: 'Sim',
      datahora: '17/03/2024 13:12',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    }
  ];
  
  detalhesArea = [
    {
      status: 3,
      descricao: 'A área total ou parcial situa-se em área de fronteira?',
      resposta: 'Sim',
      datahora: '21/06/2023 22:12',
      justificativa: '',
      maisInformacoes: ' ',
      detalhamentoMaisInformacoes: 'SOBREPOSIÇÃO PARCIAL',
      expandido: false
    },
    {
      status: 1,
      descricao: 'A Gleba Pública possui Assentimento Prévio?',
      resposta: 'Não',
      datahora: '15/09/2024 10:13',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    },
    {
      status: 1,
      descricao: 'O Assentamento possui Assentimento Prévio?',
      resposta: 'Não',
      datahora: '23/02/2022 12:15',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    },
    {
      status: 2,
      descricao: 'Somatório de todas as áreas federais já doadas ao municipio ultrapassa 2500 hectares?',
      resposta: 'Não',
      datahora: '18/03/2024 12:15',
      justificativa: '',
      maisInformacoes: ' ',
      detalhamentoMaisInformacoes: 'SOMATÓRIO DE TODAS AS ÁREAS JÁ DOADAS AO MUNICÍPIO = X HECTARES',
      expandido: false
    }
  ];

  manifestacaoInteresse = [
    {
      status: 2,
      descricao: 'A área total ou parcial sobrepõe a área de interesse da FUNAI?',
      resposta: 'Sim',
      datahora: '21/06/2023 22:12',
      justificativa: '',
      maisInformacoes: ' ',
      detalhamentoMaisInformacoes: 'SOBREPOSIÇÃO TOTAL',
      expandido: false
    },
    {
      status: 1,
      descricao: 'A área total ou parcial sobrepõe a área de interesse do Serviço Florestal Brasileiro?',
      resposta: 'Não',
      datahora: '15/09/2024 10:13',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    },
    {
      status: 1,
      descricao: 'A área total ou parcial  é objeto de processo administrativo voltado à Criação de Unidade de Conservação, Interesse do ICMBio, MMA e órgão estaduais de meio ambiente?',
      resposta: 'Não',
      datahora: '23/02/2022 12:15',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    },
    {
      status: 2,
      descricao: 'A gleba foi consultada pela Câmara Técnica de Destinação de Imóveis Rurais?',
      resposta: 'Não',
      datahora: '18/03/2024 12:15',
      justificativa: '',
      maisInformacoes: '',
      detalhamentoMaisInformacoes: '',
      expandido: false
    }
  ];

  grupos = [
    {
      titulo: 'Área Destinada',
      items: this.areaDestinada,
      accordionAberto: false
    },
    {
      titulo: 'Detalhes da Área',
      items: this.detalhesArea,
      accordionAberto: false
    },
    {
      titulo: 'Manifestação de Interesse',
      items: this.manifestacaoInteresse,
      accordionAberto: false
    }        
  ];

  ngOnInit(): void {
    const accordionList = []
    for (const brAccordion of window.document.querySelectorAll('.br-accordion')) {
      accordionList.push(Object.create(new core.BRAccordion('br-accordion', brAccordion)))
    }
  }
}
