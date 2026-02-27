import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-elaboraroficiosolicitacaoparecerpfe',
  imports: [Cabecalhosolicitacao, RouterLink, QuillModule, FormsModule, Breadcrumb],
  templateUrl: './elaboraroficiosolicitacaoparecerpfe.html',
  styleUrl: './elaboraroficiosolicitacaoparecerpfe.css'
})
export class Elaboraroficiosolicitacaoparecerpfe {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Elaborar Ofício de Solicitação de Parecer PFE', address: '' }
  ];

  texto = 'Ofício de Solicitação de Parecer PFE';

  salvar() {
    console.log(this.texto);
  }
}