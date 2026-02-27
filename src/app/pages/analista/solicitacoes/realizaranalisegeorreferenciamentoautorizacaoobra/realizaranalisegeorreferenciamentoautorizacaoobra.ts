import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-realizaranalisegeorreferenciamentoautorizacaoobra',
  imports: [Cabecalhosolicitacao, FormsModule],
  templateUrl: './realizaranalisegeorreferenciamentoautorizacaoobra.html',
  styleUrl: './realizaranalisegeorreferenciamentoautorizacaoobra.css'
})
export class Realizaranalisegeorreferenciamentoautorizacaoobra {
  situacaoSelecionada: string = 'sem';

  notificacao: string = '';
}
