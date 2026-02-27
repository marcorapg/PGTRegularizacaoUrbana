import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-emitiroficioparecermcid',
  imports: [Cabecalhosolicitacao, Breadcrumb],
  templateUrl: './emitiroficioparecermcid.html',
  styleUrl: './emitiroficioparecermcid.css'
})
export class Emitiroficioparecermcid {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Elaborar Minuta Ofício de Solicitação de Parecer MCID', address: '' }
  ];
}
