import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-identificacao',
  imports: [CommonModule, FormsModule],
  templateUrl: './identificacao.html',
  styleUrl: './identificacao.css'
})
export class Identificacao {
  exibirBeneficiarioEncontrado: boolean = true;

  pesquisarCPF() {
    this.exibirBeneficiarioEncontrado = false;
  }
}
