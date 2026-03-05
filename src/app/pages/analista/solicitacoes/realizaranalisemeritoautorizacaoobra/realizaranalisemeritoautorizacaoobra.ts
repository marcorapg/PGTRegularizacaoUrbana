import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-realizaranalisemeritoautorizacaoobra',
  imports: [Cabecalhosolicitacao, FormsModule],
  templateUrl: './realizaranalisemeritoautorizacaoobra.html',
  styleUrl: './realizaranalisemeritoautorizacaoobra.css'
})
export class Realizaranalisemeritoautorizacaoobra {
  situacaoSelecionada: string = 'sem';

  notificacao: string = '';
}
