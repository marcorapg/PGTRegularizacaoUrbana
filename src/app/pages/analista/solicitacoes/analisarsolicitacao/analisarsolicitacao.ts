import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-analisarsolicitacao',
  imports: [Cabecalhosolicitacao, FormsModule, NgIf],
  templateUrl: './analisarsolicitacao.html',
  styleUrl: './analisarsolicitacao.css'
})
export class Analisarsolicitacao {
  situacaoSelecionada: string = 'sem';

  notificacao: string = '';
}
