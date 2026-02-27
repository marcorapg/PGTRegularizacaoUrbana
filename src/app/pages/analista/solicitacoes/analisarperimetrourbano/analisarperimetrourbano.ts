import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-analisarperimetrourbano',
  imports: [Cabecalhosolicitacao, FormsModule],
  templateUrl: './analisarperimetrourbano.html',
  styleUrl: './analisarperimetrourbano.css'
})
export class Analisarperimetrourbano {
  situacaoSelecionada: string = 'sem';

  notificacao: string = '';
}
