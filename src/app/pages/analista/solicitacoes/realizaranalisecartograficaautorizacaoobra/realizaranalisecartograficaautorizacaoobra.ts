import { Component } from '@angular/core';
import { Cabecalhosolicitacao } from '../cabecalhosolicitacao/cabecalhosolicitacao';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-realizaranalisecartograficaautorizacaoobra',
  imports: [Cabecalhosolicitacao, FormsModule],
  templateUrl: './realizaranalisecartograficaautorizacaoobra.html',
  styleUrl: './realizaranalisecartograficaautorizacaoobra.css'
})
export class Realizaranalisecartograficaautorizacaoobra {
  situacaoSelecionada: string = 'sem';

  notificacao: string = '';
}
