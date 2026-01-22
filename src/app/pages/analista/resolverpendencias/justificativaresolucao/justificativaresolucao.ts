import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

declare const core: any;

@Component({
  selector: 'app-justificativaresolucao',
  imports: [RouterLink],
  templateUrl: './justificativaresolucao.html',
  styleUrl: './justificativaresolucao.css'
})
export class Justificativaresolucao {
  private scrimfoco: any;

  ngOnInit(): void {
    // Acessa a classe BRScrim do objeto 'core'
    const scrscrim = window.document.querySelector('#scrimexample');

    if (scrscrim && typeof core !== 'undefined' && core.BRScrim) {
      this.scrimfoco = new core.BRScrim('br-scrim', scrscrim, true);

      document.querySelectorAll('.close-modal-btn').forEach((el: Element, index: number) => {
        el.addEventListener('click', (e: any) => {
          this.scrimfoco.closeScrim();
        });
      });
    }
  };
}
