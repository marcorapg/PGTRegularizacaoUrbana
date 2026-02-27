import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from '../../layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Breadcrumb],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  pageBreadcrumbs = [
    { text: 'Home', address: '/' }
  ];
}
