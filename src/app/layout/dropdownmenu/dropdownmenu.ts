import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

export interface MenuItem {
  label: string;
  // um link externo (usar href)
  href?: string;
  // ou uma rota interna (usar routerLink)
  routerLink?: string;
  // opcional: desabilitado
  disabled?: boolean;
  // janela modal
  modal?: boolean;
  // opcional: id ou payload para emitir ao selecionar
  value?: any;
}

declare const core: any;

@Component({
  selector: 'app-dropdownmenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dropdownmenu.html',
  styleUrls: ['./dropdownmenu.css']
})
export class ContextMenuComponent implements OnInit, OnDestroy {
  @Input() items: MenuItem[] = [];
  // abrir/fechar inicialmente
  @Input() openOnInit = false;
  @Input() buttonLabel = 'Abrir menu';

  // emite quando um item é selecionado
  @Output() select = new EventEmitter<MenuItem>();

  @ViewChild('menuButton', { static: true }) menuButton!: ElementRef<HTMLButtonElement>;

  isOpen = false;

  private onDocClick = (e: MouseEvent) => this.onDocumentClick(e);

  constructor(private host: ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.isOpen = !!this.openOnInit;
    document.addEventListener('click', this.onDocClick);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.onDocClick);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  onDocumentClick(e: MouseEvent) {
    const hostEl = this.host.nativeElement as HTMLElement;
    if (!hostEl.contains(e.target as Node)) {
      this.close();
    }
  }

  private scrimfoco: any;

  onItemClick(item: MenuItem, event?: Event | MouseEvent | KeyboardEvent) {
    if (item.disabled) {
      event?.preventDefault();
      return;
    }

    if (item.modal) {
      const scrscrim = window.document.querySelector('#scrimexample');

      if (scrscrim && typeof core !== 'undefined' && core.BRScrim) {
        this.scrimfoco = new core.BRScrim('br-scrim', scrscrim, true);
        this.scrimfoco.showScrim();
      }
      // Fecha o menu
      this.close();
      return;
    }

    this.select.emit(item);

    // se for rota interna, navega
    if (item.routerLink) {
      // prevenir comportamento de âncora se houver
      event?.preventDefault();

      if (item.value && item.value == "novoprefeito") {
        this.router.navigate([item.routerLink],
          {
            queryParams: { modo: 'novoprefeito' }
          });
      } else if (item.value && item.value == "download") {
        const link = document.createElement('a');
        link.href = item.routerLink;
        link.download = '';
        link.click();
      } else {
        this.router.navigate([item.routerLink]);
      }

    }

    // Fecha o menu
    this.close();
  }

  // tecla ESC fecha o menu
  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event?: Event | KeyboardEvent) {
    // Não usamos o evento aqui além de detectar ESC — aceitamos Event para evitar erro de tipagem
    if (this.isOpen) this.close();
  }
}