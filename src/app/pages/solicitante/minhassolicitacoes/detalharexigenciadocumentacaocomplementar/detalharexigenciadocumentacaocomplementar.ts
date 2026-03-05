import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cabecalhosolicitacao } from "../cabecalhosolicitacao/cabecalhosolicitacao";

@Component({
  selector: 'app-detalharexigenciadocumentacaocomplementar',
  imports: [RouterLink, Breadcrumb, CommonModule, FormsModule, Cabecalhosolicitacao],
  templateUrl: './detalharexigenciadocumentacaocomplementar.html',
  styleUrl: './detalharexigenciadocumentacaocomplementar.css'
})
export class Detalharexigenciadocumentacaocomplementar {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
    { text: 'Detalhamento de Exigência de Documentação Complementar', address: '' }
  ];
}