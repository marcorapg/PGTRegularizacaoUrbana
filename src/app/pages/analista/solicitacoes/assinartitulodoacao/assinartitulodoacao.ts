import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

declare const core: any;

@Component({
  selector: 'app-assinartitulodoacao',
  imports: [Cabecalhosolicitacao, RouterLink, FormsModule, Breadcrumb],
  templateUrl: './assinartitulodoacao.html',
  styleUrl: './assinartitulodoacao.css'
})

export class Assinartitulodoacao {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Assinar Título de Doação', address: '' }
  ];
}
