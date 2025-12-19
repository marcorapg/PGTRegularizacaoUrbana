import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dados',
  imports: [CommonModule, FormsModule],
  templateUrl: './dados.html',
  styleUrl: './dados.css'
})
export class Dados implements AfterViewInit {
  choice: string = 'no';

  nomeResponsavel: string = '';
  emailResponsavel: string = '';
  telefoneResponsavel: string = '';

  tipoSelecionado: string = '';

  pesquisarCPFResponsavel() {
    this.nomeResponsavel = 'Carlos Vieira Mota';
    this.emailResponsavel = 'carlos.vieira@pbh.mg.gov.br';
    this.telefoneResponsavel = '(31) 99548-7896';
  }

  ngAfterViewInit(): void {
    const core = (window as any).core;


    const itemList = []
    for (const brItem of window.document.querySelectorAll('.br-item')) {
      itemList.push(new core.BRItem('br-item', brItem))
    }

    const alertList = []
    for (const brAlert of window.document.querySelectorAll('.br-message')) {
      alertList.push(new core.BRAlert('br-message', brAlert))
    }

    const tooltipList = []
    for (const brTooltip of window.document.querySelectorAll('.br-tooltip:not(.utilities)')) {
      tooltipList.push(new core.BRTooltip('br-tooltip', brTooltip))
    }
  }
}
