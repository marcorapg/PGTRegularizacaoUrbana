import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

declare const core: any;

@Component({
  selector: 'app-registraraprovacaopfe',
  imports: [Cabecalhosolicitacao, QuillModule, FormsModule],
  templateUrl: './registraraprovacaopfe.html',
  styleUrl: './registraraprovacaopfe.css'
})
export class Registraraprovacaopfe {
  pageBreadcrumbs = [
    { text: 'Home', address: '/analista/' },
    { text: 'Monitoramento de Solicitações de Título de Regularização Urbana', address: '/analista/solicitacoes/' },
    { text: 'Registrar Aprovação PFE', address: '' }
  ];

  texto = 'Minuta do Título de Doação com Encargos';

  salvar() {
    console.log(this.texto);
  }
}
