import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from '../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-solicitante',
  imports: [RouterModule, Breadcrumb], 
  templateUrl: './solicitante.html',
  styleUrl: './solicitante.css'
})
export class Solicitante {
  pageBreadcrumbs = [
    { text: 'Solicitante', address: '/' }
  ];
}
