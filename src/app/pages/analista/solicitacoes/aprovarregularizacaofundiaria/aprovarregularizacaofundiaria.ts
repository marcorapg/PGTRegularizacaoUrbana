import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-aprovarregularizacaofundiaria',
  imports: [Cabecalhosolicitacao, RouterLink, FormsModule, Breadcrumb],
  templateUrl: './aprovarregularizacaofundiaria.html',
  styleUrl: './aprovarregularizacaofundiaria.css'
})
export class Aprovarregularizacaofundiaria {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Aprovar Regularização Fundiária', address: '' }
  ];
}
