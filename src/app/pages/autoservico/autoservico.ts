import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

declare const core: any;

@Component({
  selector: 'app-autoservico',
  imports: [RouterModule],
  templateUrl: './autoservico.html',
  styleUrl: './autoservico.css'
})
export class Autoservico {
  
  private scrimfoco: any;

  ngOnInit(): void {

  }
}