import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-assinardespachodecisorio',
  imports: [Cabecalhosolicitacao, RouterLink, QuillModule, FormsModule, Breadcrumb],
  templateUrl: './assinardespachodecisorio.html',
  styleUrl: './assinardespachodecisorio.css'
})
export class Assinardespachodecisorio {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Assinar Despacho Decisório', address: '' }
  ];

  texto = 'Despacho Decisório';

  salvar() {
    console.log(this.texto);
  }
}
