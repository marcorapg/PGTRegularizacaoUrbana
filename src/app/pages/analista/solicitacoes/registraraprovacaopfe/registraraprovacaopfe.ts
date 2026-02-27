import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';

declare const core: any;

@Component({
  selector: 'app-registraraprovacaopfe',
  imports: [Cabecalhosolicitacao, RouterLink, QuillModule, FormsModule, Breadcrumb],
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

  ngOnInit(): void {
    const uploadList = []

    function uploadTimeout() {
      return new Promise((resolve) => {
        // Colocar aqui um upload para o servidor e retirar o timeout
        return setTimeout(resolve, 3000)
      })
    }

    for (const brUpload of window.document.querySelectorAll('.br-upload')) {
      uploadList.push(new core.BRUpload('br-upload', brUpload, uploadTimeout))
    }
  };
}
