import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-elaborardocumentotitulodoacao',
  imports: [Cabecalhosolicitacao, RouterLink, QuillModule, FormsModule, Breadcrumb],
  templateUrl: './elaborardocumentotitulodoacao.html',
  styleUrl: './elaborardocumentotitulodoacao.css'
})
export class Elaborardocumentotitulodoacao {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Elaborar Documentos Título de Doação', address: '' }
  ];

  texto1 = 'Minuta de Despacho Decisório';
  texto2 = 'Relatório';
  texto3 = 'Minuta de Resolução';
  texto4 = 'Nota Técnica';

  salvar() {
    console.log(this.texto1);
  }
}

