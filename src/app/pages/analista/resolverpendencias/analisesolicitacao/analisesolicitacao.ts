import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-analisesolicitacao',
  imports: [CommonModule, FormsModule],
  templateUrl: './analisesolicitacao.html',
  styleUrl: './analisesolicitacao.css'
})

export class Analisesolicitacao {
  tipoAcaoSelecionada: string = 'georreferenciamento';
}
