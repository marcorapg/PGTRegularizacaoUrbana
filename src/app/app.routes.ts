import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Autoservico } from './pages/autoservico/autoservico';
import { Criarsolicitacao } from './pages/autoservico/criarsolicitacao/criarsolicitacao';
import { Login } from './pages/login/login';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'autoservico', component: Autoservico },
  { path: 'autoservico/criarsolicitacao', component: Criarsolicitacao },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' } // optional fallback
];
