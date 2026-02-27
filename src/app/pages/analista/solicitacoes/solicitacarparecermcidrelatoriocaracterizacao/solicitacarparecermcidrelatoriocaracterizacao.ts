import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-solicitacarparecermcidrelatoriocaracterizacao',
  imports: [Cabecalhosolicitacao, RouterLink, QuillModule, FormsModule, Breadcrumb],
  templateUrl: './solicitacarparecermcidrelatoriocaracterizacao.html',
  styleUrl: './solicitacarparecermcidrelatoriocaracterizacao.css'
})
export class Solicitacarparecermcidrelatoriocaracterizacao {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Solicitar Parecer MCID do Relatório de Caracterização Urbana', address: '' }
  ];

  texto = 'Modelo de Ofício de Solicitação de Parecer MCID do Relatório de Caracterização Urbana';

  salvar() {
    console.log(this.texto);
  }
}
