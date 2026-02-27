import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-assinarautorizacaoobra',
  imports: [Cabecalhosolicitacao, RouterLink, FormsModule, Breadcrumb],
  templateUrl: './assinarautorizacaoobra.html',
  styleUrl: './assinarautorizacaoobra.css'
})
export class Assinarautorizacaoobra {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Assinar Autorização de Obra', address: '' }
  ];
}
