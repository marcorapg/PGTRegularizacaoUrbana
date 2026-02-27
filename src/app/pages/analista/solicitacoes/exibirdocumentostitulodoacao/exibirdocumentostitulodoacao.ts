import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-exibirdocumentostitulodoacao',
  imports: [Cabecalhosolicitacao, RouterLink, FormsModule, Breadcrumb],
  templateUrl: './exibirdocumentostitulodoacao.html',
  styleUrl: './exibirdocumentostitulodoacao.css'
})
export class Exibirdocumentostitulodoacao {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Exibir Documentos de Título de Doação', address: '' }
  ];
}
