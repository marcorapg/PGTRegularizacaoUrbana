import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  isAnalista: boolean = false;
  logado: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Verificação inicial
    this.verificarRota(this.router.url);

    // Verifica sempre que a rota mudar
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.verificarRota(event.urlAfterRedirects);
      }
    });
  }

  private verificarRota(url: string): void {
    const urlLower = url.toLowerCase();

    this.isAnalista = urlLower.includes('analista');

    this.logado =
      !urlLower.includes('analista') &&
      !urlLower.includes('solicitante');
  }
}
