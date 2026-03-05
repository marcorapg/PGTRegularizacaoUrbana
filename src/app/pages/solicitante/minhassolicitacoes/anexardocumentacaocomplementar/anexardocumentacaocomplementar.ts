import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../layout/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';

declare const core: any;

@Component({
  selector: 'app-anexardocumentacaocomplementar',
  imports: [RouterLink, Breadcrumb, CommonModule, FormsModule, Cabecalhosolicitacao],
  templateUrl: './anexardocumentacaocomplementar.html',
  styleUrl: './anexardocumentacaocomplementar.css'
})
export class Anexardocumentacaocomplementar {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Minhas solicitações', address: '/solicitante/minhassolicitacoes' },
    { text: 'Anexar Documentação Complementar Exigida', address: '' }
  ];

  ngAfterViewInit(): void {
    const uploadList = [];
    function uploadTimeout() {
      return new Promise((resolve) => {
        // Colocar aqui um upload para o servidor e retirar o timeout
        return setTimeout(resolve, 3000)
      })
    } 

    for (const brUpload of window.document.querySelectorAll('.br-upload')) {
      uploadList.push(new core.BRUpload('br-upload', brUpload, uploadTimeout))
    }
  }
}