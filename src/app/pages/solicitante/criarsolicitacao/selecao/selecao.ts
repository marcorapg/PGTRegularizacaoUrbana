import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selecao',
  imports: [CommonModule, FormsModule],
  templateUrl: './selecao.html',
  styleUrl: './selecao.css'
})
export class Selecao {
  opcaoAutorizacaoObra: string = '';

  opcaoSelecionada: string | null = null;

  algumaMarcada() {
    if (this.opcaoSelecionada) {
      return true;
    }
    return false;
  }
}
