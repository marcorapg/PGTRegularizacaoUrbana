import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from '../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-analista',
  imports: [RouterModule, Breadcrumb],
  templateUrl: './analista.html',
  styleUrl: './analista.css'
})
export class Analista {
  pageBreadcrumbs = [
    { text: 'Analista', address: '' }
  ];
}
