import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-analisarsolicitacao',
  imports: [Cabecalhosolicitacao, FormsModule],
  templateUrl: './analisarsolicitacao.html',
  styleUrl: './analisarsolicitacao.css'
})
export class Analisarsolicitacao {
  situacaoSelecionada: string = 'sem';

  notificacao: string = '';
}
